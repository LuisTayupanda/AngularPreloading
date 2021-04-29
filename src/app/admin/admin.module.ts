import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DashboardComponent } from './components/dashboard/dashboard.component';
import { ProductsComponent } from './components/products/products.component';
import { AdminComponent } from './admin.component';
import { RouterModule } from '@angular/router';
import { AdminRoutingModule } from './admin-routing.module';
import { AdminService } from './services/admin.service';


@NgModule({
  declarations: [
    AdminComponent,
    DashboardComponent,
    ProductsComponent,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    RouterModule,
  ],
  providers: [AdminService],
})
export class AdminModule {
  constructor() {
    console.warn('AdminModule has been loaded!');
  }
 }
