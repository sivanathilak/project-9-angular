
import { Component, inject } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { Customer } from '../models/customer';
import { CustomerService } from '../services/customer';

@Component({
  selector: 'app-edit-customer',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './edit-customer.html',
  styleUrl: './edit-customer.css'
})
export class EditCustomer {

  private customerService = inject(CustomerService);

  customers: Customer[] = this.customerService.getCustomers();

  selectedCustomer: Customer | null = null;

  selectCustomer(customer: Customer): void {
    this.selectedCustomer = { ...customer };
  }

  updateCustomer(): void {
    if (this.selectedCustomer) {

      this.customerService.updateCustomer(this.selectedCustomer);

      // Keep the customer list updated
      this.customers = this.customerService.getCustomers();

      this.selectedCustomer = null;
    }
  }

  cancelEdit(): void {
    this.selectedCustomer = null;
  }
}
