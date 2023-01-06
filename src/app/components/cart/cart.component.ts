import {Component, OnInit} from '@angular/core';
import {Cart} from "../../models/Cart";
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../models/CartItem";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  cart!: Cart
  quantity!: number;

  constructor(private cartService: CartService) {
  }

  ngOnInit(): void {
    this.cart = this.cartService.getCart();
  }

  updateCart(cartItem: CartItem): void {

  }
}
