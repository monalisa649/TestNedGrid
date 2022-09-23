import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';


@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {
  public email : string = ''
  constructor(private _authService: AuthService) { }

  ngOnInit(): void {

    this.email = this._authService.email
  }

  public signOut () {
    this._authService.signOut()
  }
}
