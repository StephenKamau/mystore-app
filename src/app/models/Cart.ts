import {CartItem} from "./CartItem";

export interface Cart{
  address:string;
  name:string;

  creditCardNumber:number;
  cartItems:CartItem[];
}
