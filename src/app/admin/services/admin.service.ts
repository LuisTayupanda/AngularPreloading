import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class AdminService {

  constructor() {
    console.warn('**AdminService has been injected!**');
   }

   getHello() {
     return 'Hello, I am here to help you!';
   }
}
