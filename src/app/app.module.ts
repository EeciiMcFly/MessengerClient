import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from './registration/registration.component'

const appRoutes: Routes =[
	{ path: 'registration', component: RegistrationComponent},
	{ path: 'login', component: LoginComponent},
];

@NgModule({
	imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
	declarations: [ AppComponent , LoginComponent, RegistrationComponent],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }