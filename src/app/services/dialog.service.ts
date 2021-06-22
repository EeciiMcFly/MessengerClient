import { DialogUi } from "../objects/dialogUi";
import { DialogDTO } from "../dto/dialogDTO";
import { ApiClient } from "../api-http-client/api-client.service";
import { Injectable } from "@angular/core";
import { UserService } from "./user.service";
import { AddDialogRequest } from "../requests/addDialogRequest";

@Injectable()
export class DialogService{
	public currentUserId: string;
	private dialogsUi: DialogUi[];
	private dialogs: DialogDTO[];
	private loading: boolean = false;
	private timeout: any;
	constructor(private api: ApiClient, private userService: UserService) {
		let user = userService.getUser();
		this.currentUserId = user.id;
		this.dialogsUi = [];
		this.dialogs = [];
		
		this.loadDialogs();
	}
	
	async doRequest(){
		this.timeout = setInterval(async () => {
			this.dialogs = await this.api.get<DialogDTO[]>("/api/dialogs/" + this.currentUserId, this.userService.getCredentials())
			let newDialogsUi = []
			for (let dialog of this.dialogs)
			{
				let otherUserId = "";
				if (dialog.firstUserId == this.currentUserId)
				{
					otherUserId = dialog.secondUserId
				}
				else 
				{
					otherUserId = dialog.firstUserId
				}
				let user = await this.userService.getUserById(otherUserId);
				let dialogUi = new DialogUi(user.login, dialog.dialogId)
				newDialogsUi.push(dialogUi);
			}

			this.dialogsUi = newDialogsUi;
		}, 10000)
	}
	
	
	public async loadDialogs() {
		console.log("Загружаем диалоги")
		this.dialogs = await this.api.get<DialogDTO[]>("/api/dialogs/" + this.currentUserId, this.userService.getCredentials())
		let newDialogsUi = []
		for (let dialog of this.dialogs) {
			let otherUserId = "";
			if (dialog.firstUserId == this.currentUserId) {
				otherUserId = dialog.secondUserId
			} else {
				otherUserId = dialog.firstUserId
			}
			let user = await this.userService.getUserById(otherUserId);
			let dialogUi = new DialogUi(user.login, dialog.dialogId)
			newDialogsUi.push(dialogUi);
		}

		this.dialogsUi = newDialogsUi;
		this.doRequest();
	}
	
	public stopLoading(){
		if (this.timeout) {
			clearInterval(this.timeout);
		}
	}
	
	public async createDialog(userId:string): Promise<string>{
		let request = new AddDialogRequest(this.currentUserId, userId);
		let credentials = this.userService.getCredentials();
		let dialog = await this.api.post<DialogDTO>("/api/dialogs", request, credentials)
		
		return dialog.dialogId;
	}
	
	public getDialogs(){
		return this.dialogsUi;
	}


}