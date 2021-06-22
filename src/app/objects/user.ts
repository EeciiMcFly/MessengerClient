export class User{
	public userName: string;
	public password: string;
	public id: string;
	
	constructor(id: string, userName:string, password:string) {
		this.id = id;
		this.userName = userName;
		this.password = password;
	}
}