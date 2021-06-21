import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from './registration/registration.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { HttpClientModule } from "@angular/common/http";
import { RegisterService } from "./register.service";
import { ApiClient } from "./api-http-client/api-client.service";
import { LoginService } from "./login.service";

const appRoutes: Routes =[
	{ path: 'registration', component: RegistrationComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'dialogs', component: DialogsComponent}
];

@NgModule({
	imports:      [ 
		BrowserModule, 
		FormsModule, 
		RouterModule.forRoot(appRoutes), 
		ReactiveFormsModule,
		HttpClientModule,
		
	],
	declarations: [ 
		AppComponent , 
		LoginComponent, 
		RegistrationComponent, 
		DialogsComponent,
		],
	bootstrap:    [ AppComponent ],
	providers: [
		RegisterService,
		ApiClient,
		LoginService
	]
})
export class AppModule { }