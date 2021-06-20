import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})
export class RegistrationComponent implements OnInit {
  get confirmPassword(): string {
    return this._confirmPassword;
  }

  set confirmPassword(value: string) {
    this._confirmPassword = value;
  }
  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
  }
  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
  }
  private _login: string;
  private _password: string;
  private _confirmPassword: string;
  
  constructor() { 
    this._login = "";
    this._password = "";
    this._confirmPassword = "";
  }

  ngOnInit(): void {
  }

}
