export class UserDTO{
	public userId: string;
	public login: string;
	
	constructor(userName: string, password: string) {
		this.userId = userName;
		this.login = password;
	}
}