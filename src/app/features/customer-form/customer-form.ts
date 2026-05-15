import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  selector: 'app-customer-form',
  imports: [ReactiveFormsModule],
  templateUrl: './customer-form.html',
  styleUrl: './customer-form.css',
})
export class CustomerForm {
  form = new FormGroup({
    fullName: new FormControl(''),
    email: new FormControl('', [Validators.required, Validators.email]),
    phone: new FormControl(''),
    address: new FormControl(''),
    loyalty: new FormControl(''),
    state: new FormControl(''),
    image: new FormControl(''),
  });

  
}
