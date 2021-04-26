import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { DashboardComponent } from './admin/components/dashboard/dashboard.component';
import { ProductsComponent } from './admin/components/products/products.component';
import { AuthComponent } from './auth/auth.component';
import { LoginComponent } from './auth/components/login/login.component';
import { RegisterComponent } from './auth/components/register/register.component';
import { HomeComponent } from './landing/components/home/home.component';
import { LandingComponent } from './landing/landing.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'admin', component: AdminComponent, children: [
          { path: 'dashboard', component: DashboardComponent },
          { path: 'products', component: ProductsComponent },
        ]
      },
      {
        path: 'auth', component: AuthComponent, children: [
          { path: 'login', component: LoginComponent },
          { path: 'register', component: RegisterComponent },
        ]
      },
      {
        path: 'landing', component: LandingComponent, children: [
          { path: 'home', component: HomeComponent },
        ]
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
