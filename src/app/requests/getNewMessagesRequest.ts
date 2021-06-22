export class GetNewMessagesRequest{
	public lastRequestedTime: string;
	
	constructor(lastRequestedTime: string) {
		this.lastRequestedTime = lastRequestedTime;
	}
}