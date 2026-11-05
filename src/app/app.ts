
import { Component, inject } from '@angular/core';
import { RouterOutlet, RouterLink } from '@angular/router';

import { P1Console } from './p1-console/p1-console';
import { P2Cards } from './p2-cards/p2-cards';
import { P3Form } from './p3-form/p3-form';
import { P4Delete } from './p4-delete/p4-delete';
import { ShoppingCart } from './shopping-cart/shopping-cart';
import { EditCustomer } from './edit-customer/edit-customer';

import { Product } from './models/product';
import { Customer } from './models/customer';
import { Office } from './models/office';

import { ProductService } from './services/product';
import { CustomerService } from './services/customer';
import { OfficeService } from './services/office';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [
    P1Console,
    P2Cards,
    P3Form,
    P4Delete,
    ShoppingCart,
    EditCustomer,
    RouterOutlet,
    RouterLink
  ],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {

  private productService = inject(ProductService);
  private customerService = inject(CustomerService);
  private officeService = inject(OfficeService);

  products: Product[] = this.productService.getProducts();
  customers: Customer[] = this.customerService.getCustomers();
  offices: Office[] = this.officeService.getOffices();

}
