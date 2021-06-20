import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }   from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from './registration/registration.component';
import { DialogsComponent } from './dialogs/dialogs.component'

const appRoutes: Routes =[
	{ path: 'registration', component: RegistrationComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'dialogs', component: DialogsComponent}
];

@NgModule({
	imports:      [ BrowserModule, FormsModule, RouterModule.forRoot(appRoutes) ],
	declarations: [ AppComponent , LoginComponent, RegistrationComponent, DialogsComponent],
	bootstrap:    [ AppComponent ]
})
export class AppModule { }