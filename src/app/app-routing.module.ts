import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { LandingComponent } from './landing/landing.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'admin', component: AdminComponent, loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
      },
      {
        path: 'auth', component: AuthComponent, loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'landing', component: LandingComponent, loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
