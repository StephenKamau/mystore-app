import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";

@Component({
  selector: 'app-confirmation',
  templateUrl: './confirmation.component.html',
  styleUrls: ['./confirmation.component.css']
})
export class ConfirmationComponent implements OnInit {
  name: string = '';
  total: number = 0;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cartService.cart$.subscribe(cart => {
      this.name = cart.name
      this.total = cart.cartItems.reduce((total, item) => {
        return total + (item.quantity * item.product.price)
      }, 0);
    })
  }
}
