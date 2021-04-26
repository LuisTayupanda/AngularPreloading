import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './landing.component';
import { RouterModule } from '@angular/router';
import { LandingRoutingModule } from './landing-routing.module';


@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    LandingRoutingModule,
    RouterModule,
  ]
})
export class LandingModule {
  constructor() {
    console.warn('LandingModule has been loaded!');
  }
 }
