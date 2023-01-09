import {Injectable} from '@angular/core';
import {CartItem} from "../models/CartItem";
import {Cart} from "../models/Cart";
import {BehaviorSubject} from "rxjs";
import {Address} from "../components/address-form/address-form.component";


@Injectable({
  providedIn: 'root'
})
export class CartService {
  private cartItems: CartItem[] = [];
  private cart = {address: '', name: '', creditCardNumber: 0, cartItems: this.cartItems};
  cart$: BehaviorSubject<Cart> = new BehaviorSubject<Cart>(this.cart);

  add(cartItem: CartItem) {
    let currentCartItem = this.cart.cartItems.filter(value => value.product.id === cartItem.product.id)
    if (currentCartItem[0]) {
      cartItem.quantity += currentCartItem[0].quantity;
    }
    this.cart.cartItems.unshift(cartItem);
    this.cart$.next(this.cart);
  }

  getCartItems() {
    return this.cart$;
  }

  update(cartItem: CartItem) {
    this.cartItems = this.cartItems.filter(c => c.product.id !== cartItem.product.id);
    this.cartItems.push(cartItem);
    this.cart.cartItems = this.cartItems;
    this.cart$.next(this.cart);
  }

  remove(cartItem: CartItem) {
    this.cartItems = this.cartItems.filter(c => c.product.id !== cartItem.product.id);
    this.cart.cartItems = this.cartItems;
    this.cart$.next(this.cart);
  }

  setAddress(address: Address) {
    this.cart.name = address.name;
    this.cart.address = address.address;
    this.cart.creditCardNumber = parseInt(address.cardNumber);
    this.cart$.next(this.cart);
  }
}
