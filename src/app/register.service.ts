
import { HttpClient, HttpHeaders } from "@angular/common/http";
import { RegisterUserRequest } from "./requests/RegisterUserRequest";
import { Observable } from "rxjs";
import { RegisterResult } from "./dto/RegisterResult";
import { Injectable } from "@angular/core";
import { RegistrationStatus } from "./emuns/RegistrationStatus";
import { ApiClient } from "./api-http-client/api-client.service";
import { Credentials } from "./dto/credentials";

@Injectable()
export class RegisterService {
	constructor(private api: ApiClient) {
	}

	async tryRegister(registerUserRequest: RegisterUserRequest): Promise<RegisterResult> {

		const credentials = new Credentials("newUser", "pass");
		let registrationStatus = await this.api.post<RegisterResult>("api/users/register", registerUserRequest, credentials)

		return registrationStatus;
	}
}