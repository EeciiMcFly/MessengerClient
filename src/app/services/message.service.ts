import { Injectable } from "@angular/core";
import { ApiClient } from "../api-http-client/api-client.service";
import { MessageDTO } from "../dto/messageDTO";
import { GetNewMessagesRequest } from "../requests/getNewMessagesRequest";
import { UserService } from "./user.service";

@Injectable()
export class MessageService{
	private currentDialogId: string;
	private currentUserId: string;
	private userName: string;
	private messages: MessageDTO[];
	private timeout: any;
	private lastUpdateTime: string;
	constructor(private api: ApiClient, private userService: UserService) {
		this.currentUserId = userService.getUser().id;
		this.currentDialogId = "";
		this.userName = "";
		this.messages = [];
		this.lastUpdateTime = new Date().toLocaleString();
		
	}

	async doRequest(){
		this.timeout = setInterval(async () => {
			let request = new GetNewMessagesRequest(this.lastUpdateTime);
			let credentials = this.userService.getCredentials();
			let newMessages = await this.api.post<MessageDTO[]>("api/dialogs/"+ this.currentDialogId +"/messages/new", request, credentials)
			this.messages = this.messages.concat(newMessages);
			this.lastUpdateTime = new Date().toLocaleString();
		}, 3000)
	}
	
	public startMessaging()
	{
		this.loadMessages();
	}
	
	public stopMessaging()
	{
		this.messages = [];
		if (this.timeout) {
			clearInterval(this.timeout);
		}
	}
	
	async loadMessages(){
		let newMessages = await this.api.get<MessageDTO[]>("api/dialogs/" + this.currentDialogId + "/messages", this.userService.getCredentials())
		this.messages = this.messages.concat(newMessages);
		this.lastUpdateTime = new Date().toLocaleString();
		await this.doRequest();
	}
	
	async sendMessage(text:string): Promise<MessageDTO>{
		let messageTime = new Date().toLocaleString();
		let newMessage = new MessageDTO(this.currentUserId, this.currentDialogId, messageTime, text);
		
		await this.api.post("api/dialogs/" + this.currentDialogId + "/messages", newMessage, this.userService.getCredentials())
		
		return newMessage;
	}
	
	public getMessages() : MessageDTO[]{
		return this.messages;
	}
	
	public setDialogId(dialogId:string){
		this.currentDialogId = dialogId;
	}
	
	public setUserName(userName:string){
		this.userName = userName;
	}
	
	public getUserName(): string {
		return this.userName;
	}

	public getDialogId(): string {
		return this.currentDialogId;
	}
}