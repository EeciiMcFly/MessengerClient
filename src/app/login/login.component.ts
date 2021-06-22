import { Component} from '@angular/core';
import { Router } from "@angular/router";
import { LoginService } from "../services/login.service";
import { UserService } from "../services/user.service";

@Component({
  selector: 'login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent{
  private _name: string;
  private _password: string;
  public _hasLoginError: boolean = false;
  public _hasPasswordError: boolean = false;
  public _loginErrorText: string = "";
  public _passwordErrorText: string = "";
  
  constructor(private loginService: LoginService, private router: Router, private userService: UserService) {
    this._name = "";
    this._password = "";
  }
  
  get name() {
    return this._name;
  }

  set name(value) {
    this._hasLoginError = false;
    this._name = value;
  }

  get password() {
    return this._password;
  }

  set password(value) {
    this._hasPasswordError = false;
    this._password = value;
  }
  
  async login() {
    if (this._name.length == 0) {
      this._hasLoginError = true;
      this._loginErrorText = "Значение не задано";
      
      return;
    }

    if (this._password.length == 0) {
      this._hasPasswordError = true;
      this._passwordErrorText = "Значение не задано";
      
      return;
    }

    let user = await this.loginService.tryLogin(this._name, this._password);
    console.log(user);
    if (user != null)
    {
      this.userService.addUser(user.userId, this._name, this._password);
      this.router.navigate(["/dialogs"])
    }
    else 
    {
      this._hasLoginError = true;
      this._loginErrorText = "Неверные данные авторизации";
    }
    
  }
  
  moveToRegister()
  {
    this.router.navigate(["/registration"])
  }
}
