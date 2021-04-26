import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    DashboardComponent,
    ProductsComponent,
    AdminComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class AdminModule {
  constructor() {
    console.warn('AdminModule has been loaded!');
  }
 }
