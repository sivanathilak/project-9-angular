
import { Component, inject } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { CustomerService } from '../services/customer';
import { Customer } from '../models/customer';

@Component({
  selector: 'app-customer-details',
  standalone: true,
  imports: [],
  templateUrl: './customer-details.html',
  styleUrl: './customer-details.css'
})
export class CustomerDetails {

  private route = inject(ActivatedRoute);
  private customerService = inject(CustomerService);

  customer: Customer | undefined;

  ngOnInit(): void {
    const id = this.route.snapshot.paramMap.get('id');

    this.customer = this.customerService
      .getCustomers()
      .find(customer => customer.customerId === id);
  }
}

