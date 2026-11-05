
import { Injectable } from '@angular/core';
import { Product } from '../models/product';

@Injectable({
  providedIn: 'root'
})
export class Cart {

  private items: Product[] = [];

  constructor() {
    if (typeof localStorage !== 'undefined') {
      const savedCart = localStorage.getItem('shoppingCart');

      if (savedCart) {
        try {
          this.items = JSON.parse(savedCart);
        } catch {
          this.items = [];
        }
      }
    }
  }

  getItems(): Product[] {
    return [...this.items];
  }

  addItem(product: Product): void {
    this.items.push(product);
    this.saveCart();
  }

  removeItem(index: number): void {
    if (index >= 0 && index < this.items.length) {
      this.items.splice(index, 1);
      this.saveCart();
    }
  }

  getTotal(): number {
    return this.items.reduce(
      (total, product) => total + product.price,
      0
    );
  }

  clearCart(): void {
    this.items = [];
    this.saveCart();
  }

  private saveCart(): void {
    if (typeof localStorage !== 'undefined') {
      localStorage.setItem(
        'shoppingCart',
        JSON.stringify(this.items)
      );
    }
  }
}
