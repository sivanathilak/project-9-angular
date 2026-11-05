
import { Injectable } from '@angular/core';
import { Customer } from '../models/customer';

@Injectable({
  providedIn: 'root'
})
export class CustomerService {

  private customers: Customer[] = [
    {
      customerId: 'CUST-001',
      firstName: 'Alice',
      lastName: 'Smith',
      email: 'alice.smith@example.com',
      phone: '555-0101'
    },
    {
      customerId: 'CUST-002',
      firstName: 'Bob',
      lastName: 'Johnson',
      email: 'bob.j@example.com',
      phone: '555-0102'
    },
    {
      customerId: 'CUST-003',
      firstName: 'Carol',
      lastName: 'Williams',
      email: 'carol.w@example.com',
      phone: '555-0103'
    }
  ];

  // GET ALL CUSTOMERS
  getCustomers(): Customer[] {
    return this.customers;
  }

  // ADD CUSTOMER
  addCustomer(customer: Customer): void {
    this.customers.push(customer);
  }

  // DELETE CUSTOMER
  deleteCustomer(index: number): void {
    if (index >= 0 && index < this.customers.length) {
      this.customers.splice(index, 1);
    }
  }

  // UPDATE CUSTOMER
  updateCustomer(updatedCustomer: Customer): void {
    const customer = this.customers.find(
      customer => customer.customerId === updatedCustomer.customerId
    );

    if (customer) {
      Object.assign(customer, updatedCustomer);
    }
  }
}
