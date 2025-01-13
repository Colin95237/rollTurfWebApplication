import {CartItem} from "./cart-item";

export interface Order {
  id: number;
  name: string;
  address: string;
  zipcode: string;
  city: string;
  totalPrice: number;
  items: CartItem[];  // An order contains multiple CartItems
}
