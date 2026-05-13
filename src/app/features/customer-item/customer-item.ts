import { Component, input } from '@angular/core';
import { ICustomer } from '../interfaces/customer.interface';

@Component({
  selector: 'app-customer-item',
  imports: [],
  templateUrl: './customer-item.html',
  styleUrl: './customer-item.css',
})
export class CustomerItem {
  readonly customer = input.required<ICustomer>()
}
