import { Component, OnInit } from '@angular/core';
import { RegisterResult } from "../dto/RegisterResult";
import { RegistrationStatus } from "../emuns/RegistrationStatus";
import { Router } from "@angular/router";
import { RegisterUserRequest } from "../requests/RegisterUserRequest";
import { RegisterService } from "../register.service";

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
    this._hasConfirmPasswordError = false;
  }
  get password(): string {
    return this._password;
  }

  set password(value: string) {
    this._password = value;
    this._hasConfirmPasswordError = false;
    this._hasPasswordError = false;
  }
  
  get login(): string {
    return this._login;
  }

  set login(value: string) {
    this._login = value;
    this._hasLoginError = false;
  }
  
  private _login: string = "";
  private _password: string = "";
  private _confirmPassword: string = "";
  private _router: Router;
  public _hasLoginError: boolean = false;
  public _hasPasswordError: boolean = false;
  public _hasConfirmPasswordError: boolean = false;
  public _loginErrorText: string = "";
  public _passwordErrorText: string = "";
  public _confirmPasswordErrorText: string = "";
  private response: RegisterResult;
  constructor(router: Router, private register: RegisterService) {
    this._router = router;
    this.response = new RegisterResult(RegistrationStatus.Success);
  }
  
  async tryRegister(): Promise<void> {
    
    if (this._login.length == 0)
    {
      this._hasLoginError = true;
      this._loginErrorText = "Значение не задано";
      return;
    }

    if (this._password.length == 0)
    {
      this._hasPasswordError = true;
      this._passwordErrorText = "Значение не задано";
      return;
    }

    if (this._confirmPassword != this._password)
    {
      this._hasConfirmPasswordError = true;
      this._confirmPasswordErrorText = "Пароли не совпадают";
      return;
    }
    
    let registerUserRequest = new RegisterUserRequest(this._login, this._password);

    let result : RegisterResult;
    result = await this.register.tryRegister(registerUserRequest);
    if (result.registrationStatus.toString() == "UserAlreadyExits")
    {
      this._hasLoginError = true;
      this._loginErrorText = "Пользователь с таким логином уже существует";
    }
    else
    {
      this._router.navigate(["/login"])
    }
  }

  ngOnInit(): void {
  }

}
