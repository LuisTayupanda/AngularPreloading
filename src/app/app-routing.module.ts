import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { QuicklinkStrategy } from 'ngx-quicklink';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { LandingComponent } from './landing/landing.component';
import { LayoutComponent } from './layout/layout.component';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'landing',
        component: LandingComponent,
        loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule), 
      },
      {
        path: 'auth',
        component: AuthComponent,
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'admin',
        component: AdminComponent,
        data: { preload: false },
        loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    { preloadingStrategy: QuicklinkStrategy }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
