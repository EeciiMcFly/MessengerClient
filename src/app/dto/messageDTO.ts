export class MessageDTO{
	public senderId: string;
	public dialogId: string;
	public messageTime: string;
	public text: string;
	
	constructor(senderId: string, dialogId: string, messageTime: string, text: string) {
		this.senderId = senderId;
		this.dialogId = dialogId;
		this.messageTime = messageTime;
		this.text = text;
	}
}