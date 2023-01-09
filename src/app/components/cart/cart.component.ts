import {Component, OnInit} from '@angular/core';
import {CartService} from "../../services/cart.service";
import {CartItem} from "../../models/CartItem";
import {Address} from "../address-form/address-form.component";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {

  cartItems: CartItem[] = [];
  total: number = 0;

  constructor(private cartService: CartService, private router: Router) {
  }

  ngOnInit(): void {
    this.cartService.getCartItems().subscribe(cart => {
        this.cartItems = cart.cartItems;
        this.total = this.cartItems.reduce((total, item) => {
          return total + (item.quantity * item.product.price)
        }, 0)
      }
    )
    ;
  }

  updateCartEvent(quantity: number, cartItem: CartItem) {
    quantity = parseInt(String(quantity));
    if (quantity > 0) {
      cartItem.quantity = quantity
      this.cartService.update(cartItem);
    }
    if (quantity < 0) {
      this.cartService.remove(cartItem);
    }
  }

  submit(address: Address) {
    this.cartService.setAddress(address);
    this.router.navigate(['/confirmation']);
  }
}
