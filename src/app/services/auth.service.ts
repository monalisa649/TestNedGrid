import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthI } from '../models/auth.inteface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  email: string;
  constructor(private router: Router) {
    this.email = localStorage.getItem('email') || '';
   }


  public signIn(auth: AuthI) {
    this.email = auth.email;
    localStorage.setItem('email', this.email);
  }

  public signOut () {
    localStorage.removeItem('email');
    this.router.navigate(['login']);
   }

}
