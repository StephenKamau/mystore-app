import {Injectable} from '@angular/core';
import {CartItem} from "../models/CartItem";
import {Cart} from "../models/Cart";

@Injectable({
  providedIn: 'root'
})
export class CartService {

  private cart: Cart = {address: '', name: '', creditCardNumber: 0, cartItems: []};

  constructor() {
  }

  add(cartItem: CartItem): void {
    this.cart.cartItems.unshift(cartItem);
  }

  getCart(): Cart {
    return this.cart;
  }
}
