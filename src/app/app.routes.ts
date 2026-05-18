import { Routes } from '@angular/router';
import { Layout } from './pages/layout/layout';
import { Dashboard } from './features/dashboard/dashboard';
import { CustomerList } from './features/customer/customer-list/customer-list';
import { CustomerSForm } from './features/customer/customer-forms/customer-s-form/customer-s-form';
import { Inventory } from './features/inventory/inventory';
import { Orders } from './features/orders/orders';
import { Reports } from './features/reports/reports';
import { Settings } from './features/settings/settings';
import { Logout } from './features/logout/logout';

export const routes: Routes = [
  {
    path: '',
    component: Layout,
    children: [
      {
        path: '',
        component: Dashboard,
      },

      {
        path: 'dashboard',
        redirectTo: '/',
      },
      {
        path: 'inventory',
        component: Inventory,
      },
      {
        path: 'customers',
        component: CustomerList,
      },
      {
        path: 'orders',
        component: Orders,
      },
      {
        path: 'reports',
        component: Reports,
      },
      {
        path: 'settings',
        component: Settings,
      },
      {
        path: 'logout',
        component: Logout,
      },
      {
        path: 'customers/:customerId',
        component: CustomerSForm,
      },
      {
        path: '**',
        component: Dashboard,
      },
    ],
  },
];
