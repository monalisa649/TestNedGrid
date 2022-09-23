import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthI } from 'src/app/models/auth.inteface';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidators } from 'src/app/utils/validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(private _authService: AuthService, private router: Router) { }

  ngOnInit(): void {

    this.form = new FormGroup({
      email: new FormControl(null, [
        Validators.required,
        CustomValidators.validateEmail,
      ]),
      password: new FormControl(null, [
        Validators.required,
        Validators.minLength(8),
        CustomValidators.validatePassword,
      ]),
    });
  }

     public submitSignIn (forma : AuthI) {
      this._authService.signIn(forma)
      this.router.navigate(['/']);
     }

     public SignOut (forma : AuthI) {
       localStorage.removeItem('email');
      this.router.navigate(['login']);
     }
}
