import { Component } from '@angular/core';

export interface CustomerItem {
  fullName: string;
  email: string;
  phone: string;
  address: string;
  loyalty: 'Bronze' | 'Silver' | 'Gold' | 'Platinum' | 'VIP';
  image: string;
  state: boolean;
}

@Component({
  selector: 'app-customer',
  imports: [],
  templateUrl: './customer.html',
  styleUrl: './customer.css',
})
export class Customer {
  customers: CustomerItem[] = [
    {
      fullName: 'Laura Méndez',
      email: 'laura.mendez@example.com',
      phone: '+34 612 345 678',
      loyalty: 'Gold',
      image: 'https://randomuser.me/api/portraits/women/1.jpg',
      state: true,
      address: 'Calle Gran Vía 45, Madrid, España',
    },
    {
      fullName: 'Carlos Rivera',
      email: 'carlos.rivera@example.com',
      phone: '+52 55 1234 5678',
      loyalty: 'Silver',
      image: 'https://randomuser.me/api/portraits/men/2.jpg',
      state: false,
      address: 'Av. Insurgentes Sur 123, Ciudad de México, México',
    },
    {
      fullName: 'Sofía Torres',
      email: 'sofia.torres@example.com',
      phone: '+54 9 11 2345 6789',
      loyalty: 'Platinum',
      image: 'https://randomuser.me/api/portraits/women/3.jpg',
      state: true,
      address: 'Calle Florida 789, Buenos Aires, Argentina',
    },
    {
      fullName: 'Miguel Herrera',
      email: 'miguel.herrera@example.com',
      phone: '+57 300 123 4567',
      loyalty: 'Bronze',
      image: 'https://randomuser.me/api/portraits/men/4.jpg',
      state: false,
      address: 'Carrera 7 #45-12, Bogotá, Colombia',
    },
    {
      fullName: 'Valentina Cruz',
      email: 'valentina.cruz@example.com',
      phone: '+56 9 8765 4321',
      loyalty: 'VIP',
      image: 'https://randomuser.me/api/portraits/women/5.jpg',
      state: true,
      address: 'Av. Providencia 2345, Santiago, Chile',
    },
    {
      fullName: 'Andrés López',
      email: 'andres.lopez@example.com',
      phone: '+51 987 654 321',
      loyalty: 'Gold',
      image: 'https://randomuser.me/api/portraits/men/6.jpg',
      state: false,
      address: 'Av. Arequipa 456, Lima, Perú',
    },
    {
      fullName: 'Camila Navarro',
      email: 'camila.navarro@example.com',
      phone: '+34 622 111 222',
      loyalty: 'Silver',
      image: 'https://randomuser.me/api/portraits/women/7.jpg',
      state: true,
      address: 'Calle Colón 12, Valencia, España',
    },
    {
      fullName: 'Diego Morales',
      email: 'diego.morales@example.com',
      phone: '+52 1 33 9876 5432',
      loyalty: 'Bronze',
      image: 'https://randomuser.me/api/portraits/men/8.jpg',
      state: false,
      address: 'Av. Vallarta 5678, Guadalajara, México',
    },
    {
      fullName: 'Paula Ríos',
      email: 'paula.rios@example.com',
      phone: '+54 9 351 555 1234',
      loyalty: 'Platinum',
      image: 'https://randomuser.me/api/portraits/women/9.jpg',
      state: true,
      address: 'Av. Colón 890, Córdoba, Argentina',
    },
    {
      fullName: 'Javier Castillo',
      email: 'javier.castillo@example.com',
      phone: '+57 310 222 3344',
      loyalty: 'VIP',
      image: 'https://randomuser.me/api/portraits/men/10.jpg',
      state: false,
      address: 'Calle 72 #10-34, Bogotá, Colombia',
    },
  ];

  resetList() {
    const newArray = this.customers.map((e) => (e = { ...e, state: true }));
    console.log(newArray);
  }
}
