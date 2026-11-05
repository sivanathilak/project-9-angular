
import { Component, inject, signal } from '@angular/core';
import { Product } from '../models/product';
import { ProductService } from '../services/product';
import { Cart } from '../services/cart';

@Component({
  selector: 'app-shopping-cart',
  standalone: true,
  imports: [],
  templateUrl: './shopping-cart.html',
  styleUrl: './shopping-cart.css'
})
export class ShoppingCart {

  private productService = inject(ProductService);
  private cartService = inject(Cart);

  products: Product[] = this.productService.getProducts();

  cartItems = signal<Product[]>([]);
  cartTotal = signal<number>(0);

  ngOnInit(): void {
    this.refreshCart();
  }

  addToCart(product: Product): void {
    this.cartService.addItem(product);
    this.refreshCart();
  }

  removeFromCart(index: number): void {
    this.cartService.removeItem(index);
    this.refreshCart();
  }

  clearCart(): void {
    this.cartService.clearCart();
    this.refreshCart();
  }

  private refreshCart(): void {
    this.cartItems.set(this.cartService.getItems());
    this.cartTotal.set(this.cartService.getTotal());
  }
}

