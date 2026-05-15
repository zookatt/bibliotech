import { Component, inject } from '@angular/core';
import { FormBuilder, ReactiveFormsModule, Validators } from '@angular/forms';

@Component({
  standalone: true,
  selector: 'app-customer-form',
  imports: [ReactiveFormsModule],
  templateUrl: './customer-form.html',
  styleUrl: './customer-form.css',
})
export class CustomerForm {
  private formBuilder = inject(FormBuilder);
  form = this.formBuilder.group({
    fullName: ['', Validators.required],
    email: ['', Validators.required],
    phone: ['', Validators.required],
    address: ['', Validators.required],
    loyalty: ['', Validators.required],
    state: ['', Validators.required],
    image: ['', Validators.required],
  });

  onSubmit() {
    console.log(this.form.value);
    console.warn(this.form.value);
  }
}
