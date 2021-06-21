import { ApiClient } from "./api-http-client/api-client.service";
import { Injectable } from "@angular/core";
import { Credentials } from "./dto/credentials";
import { UserDTO } from "./dto/userDTO";

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