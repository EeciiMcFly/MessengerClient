import { Injectable } from "@angular/core";
import { Credentials } from "../dto/credentials";
import { User } from "../objects/user";
import { ApiClient } from "../api-http-client/api-client.service";
import { UserDTO } from "../dto/userDTO";

@Injectable()
export class UserService{
	private credentials: Credentials;
	private currentUser: User;
	
	constructor(private api: ApiClient) {
		this.credentials = new Credentials("", "")
		this.currentUser = new User("", "", "")
	}
	
	public getUser(): User{
		return this.currentUser;
	}
	
	public addUser(id: string, userName: string, password: string): void{
		this.currentUser = new User(id, userName, password);
		this.credentials = new Credentials(userName, password);
	}
	
	public clearUser()
	{
		this.currentUser = new User("","","");
		this.currentUser = new User("", "", "")
	}
	
	public getCredentials(): Credentials{
		return new Credentials(this.currentUser.userName, this.currentUser.password);
	}
	
	public async getUserById(userId: string): Promise<UserDTO> {
		console.log(this.credentials);
		return await this.api.get<UserDTO>("/api/users/findByUserId/" + userId, this.credentials);
	}
	
	public async findUsers(userName:string): Promise<UserDTO[]>{
		return await this.api.get<UserDTO[]>("/api/users/findByUserName/" + userName, this.credentials);
	}
}