import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {CartItem} from "../models/cart-item";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class CartItemService {
  private apiUrl = 'http://localhost:8080/api/cart-items'; // URL zum Backend-API

  constructor(private http: HttpClient) { }

  createCartItem(cartItem: CartItem): Observable<CartItem> {
    return this.http.post<CartItem>(this.apiUrl, cartItem);
  }

  getCartItems(): Observable<CartItem[]> {
    return this.http.get<CartItem[]>(this.apiUrl);
  }

  getCartItemById(id: number): Observable<CartItem> {
    return this.http.get<CartItem>(`${this.apiUrl}/${id}`);
  }

  deleteCartItem(id: number): Observable<void> {
    return this.http.delete<void>(`${this.apiUrl}/${id}`);
  }
}
