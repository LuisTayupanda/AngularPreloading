import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { HomeComponent } from './components/home/home.component';
import { LandingComponent } from './landing.component';
import { RouterModule } from '@angular/router';


@NgModule({
  declarations: [
    HomeComponent,
    LandingComponent
  ],
  imports: [
    CommonModule,
    RouterModule,
  ]
})
export class LandingModule { 
  constructor() {
    console.warn('LandingModule has been loaded!');
  }
}
