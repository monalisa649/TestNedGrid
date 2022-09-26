import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { AuthI } from '../models/auth.interface';



@Injectable({
  providedIn: 'root'
})
export class AuthService {
  public email: string;
  constructor(private router: Router) {
    this.email = localStorage.getItem('email') || '';
   }

   /**
    * Setea email en localStorage
    * @param auth email de usuario
    */

  public signIn(auth: AuthI) {
    this.email = auth.email;
    localStorage.setItem('email', this.email);
  }
 /**
    * Elimina datos localStorage redirige a login
    */
  public signOut () {
    localStorage.removeItem('email');
    this.router.navigate(['login']);
   }

}
