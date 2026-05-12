import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Customer } from './features/customer/customer';
import { Inventory } from './features/inventory/inventory';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, Customer, Inventory],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('bibliotech');
}
