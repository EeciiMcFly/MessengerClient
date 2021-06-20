import { Component} from '@angular/core';

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  private _name: string;
  private _password: string;
  
  constructor() {
    this._name = "";
    this._password = "";
  }
  
  get name() {
    return this._name;
  }

  set name(value) {
    this._name = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._password = value;
  }
}
