export class DialogUi{
	public personName: string;
	public dialogId: string;
	
	constructor(otherUser: string, dialogId:string) {
		this.personName = otherUser;
		this.dialogId = dialogId;
	}
}