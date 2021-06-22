export class AddDialogRequest{
	public firstUserId: string;
	public secondUserId:string;
	
	constructor(firstUserId: string, secondUserId:string) {
		this.firstUserId = firstUserId;
		this.secondUserId = secondUserId;
	}
}