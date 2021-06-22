import { Injectable } from "@angular/core";
import { ApiClient } from "../api-http-client/api-client.service";
import { UserDTO } from "../dto/userDTO";
import { Credentials } from "../dto/credentials";


@Injectable()
export class LoginService{
	constructor(private api: ApiClient) {
	}
	
	async tryLogin(userName: string, password: string): Promise<UserDTO> {
		const credentials = new Credentials(userName, password);
		let result = this.api.get<UserDTO>("/api/users", credentials)
		
		return result;
	}
}