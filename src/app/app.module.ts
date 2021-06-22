import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent }   from './app.component';
import { LoginComponent } from './login/login.component';
import { RouterModule, Routes } from "@angular/router";
import { RegistrationComponent } from './registration/registration.component';
import { DialogsComponent } from './dialogs/dialogs.component';
import { HttpClientModule } from "@angular/common/http";
import { ApiClient } from "./api-http-client/api-client.service";
import { RegisterService } from "./services/register.service";
import { LoginService } from "./services/login.service";
import { UserService } from "./services/user.service";
import { DialogService } from "./services/dialog.service";
import { MessageService } from "./services/message.service";;
import { MessageComponent } from './message/message.component'

const appRoutes: Routes =[
	{ path: 'registration', component: RegistrationComponent},
	{ path: 'login', component: LoginComponent},
	{ path: 'dialogs', component: DialogsComponent},
	{ path: 'messages', component: MessageComponent},
	{ path: '**', redirectTo: "/login"}
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
		MessageComponent
		],
	bootstrap:    [ AppComponent ],
	providers: [
		RegisterService,
		ApiClient,
		LoginService,
		UserService,
		DialogService,
		MessageService
	]
})
export class AppModule { }