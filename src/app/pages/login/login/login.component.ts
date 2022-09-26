import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthI } from 'src/app/models/auth.interface';
import { AuthService } from 'src/app/services/auth.service';
import { CustomValidators } from 'src/app/utils/validators';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form!: FormGroup;
  constructor(private _authService: AuthService,
    private router: Router,
    public fb: FormBuilder) { }

  ngOnInit(): void {
    this.builForm()
  }

  private builForm() {
    this.form = this.fb.group({
      email: ['', [Validators.required, CustomValidators.validateEmail]],
      password: ['', [Validators.required, Validators.minLength(8), CustomValidators.validatePassword]],
    });
  }

  get getEmail() {
    return this.form.get('email');
  }

  get getPassword() {
    return this.form.get('password');
  }

  get isEmailValid() {
    return this.getEmail?.touched && this.getEmail.invalid
  }

  get isPasswordValid() {
    return this.getPassword?.touched && this.getPassword.invalid
  }

/**
 *
 * @param forma
 */
  public submitSignIn(forma: AuthI) {
    this._authService.signIn(forma)
    this.router.navigate(['/']);
  }

  public SignOut() {
    localStorage.removeItem('email');
    this.router.navigate(['login']);
  }
}
