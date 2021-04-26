import { NgModule } from '@angular/core';
import { NoPreloading, PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AdminComponent } from './admin/admin.component';
import { AuthComponent } from './auth/auth.component';
import { LandingComponent } from './landing/landing.component';
import { LayoutComponent } from './layout/layout.component';
import { PreloadService } from './preload/preload.service';

const routes: Routes = [
  {
    path: '', component: LayoutComponent, children: [
      {
        path: 'landing',
        component: LandingComponent,
        data: { preload: true },
        loadChildren: () => import('./landing/landing.module').then((m) => m.LandingModule), 
      },
      {
        path: 'auth',
        component: AuthComponent,
        data: { preload: true },
        loadChildren: () => import('./auth/auth.module').then((m) => m.AuthModule),
      },
      {
        path: 'admin', component: AdminComponent, loadChildren: () => import('./admin/admin.module').then((m) => m.AdminModule),
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes,
    // { preloadingStrategy: NoPreloading } default
    { preloadingStrategy: PreloadService }
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
