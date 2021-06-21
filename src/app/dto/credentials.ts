export class Credentials {
	public readonly userName: string;
	public readonly password: string;

	constructor(userName: string, password: string) {
		this.userName = userName;
		this.password = password;
	}
}