import { Injectable } from "@angular/core";
import { ApiClient } from "../api-http-client/api-client.service";
import { RegisterUserRequest } from "../requests/RegisterUserRequest";
import { RegisterResult } from "../dto/RegisterResult";
import { Credentials } from "../dto/credentials";


@Injectable()
export class RegisterService {
	constructor(private api: ApiClient) {
	}

	async tryRegister(registerUserRequest: RegisterUserRequest): Promise<RegisterResult> {

		const credentials = new Credentials("root", "pass");
		let registrationStatus = await this.api.post<RegisterResult>("api/users/register", registerUserRequest, credentials)

		return registrationStatus;
	}
}