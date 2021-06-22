export class DialogDTO {
	public dialogId: string;
	public firstUserId: string;
	public secondUserId: string;
	
	constructor(dialogId: string, firstUserId: string, secondUserId: string) {
		this.dialogId = dialogId;
		this.firstUserId = firstUserId;
		this.secondUserId = secondUserId;
	}
}