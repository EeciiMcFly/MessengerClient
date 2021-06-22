import { Component, OnInit } from '@angular/core';
import { UserService } from "../services/user.service";
import { DialogUi } from "../objects/dialogUi";
import { DialogService } from "../services/dialog.service";
import { Router } from "@angular/router";
import { UserDTO } from "../dto/userDTO";
import { AddDialogRequest } from "../requests/addDialogRequest";
import { MessageService } from "../services/message.service";

@Component({
  selector: 'app-dialogs',
  templateUrl: './dialogs.component.html',
  styleUrls: ['./dialogs.component.css']
})
export class DialogsComponent implements OnInit {

  public login: string;
  public dialogs: DialogUi[];
  public users: UserDTO[];
  public searhName: string = "";
  private timeout: any;
  constructor(private userService: UserService, 
              private dialogService: DialogService, 
              private router:Router,
              private messageService: MessageService) {
    this.users = [];
    dialogService.loadDialogs();
    this.dialogs = dialogService.getDialogs();
    let user = userService.getUser();
    this.login = user.userName;
    this.timeout = setInterval(() => {
      this.dialogs = this.dialogService.getDialogs();
    }, 10000)
  }
  
  public logOut()
  {
    this.dialogService.stopLoading();
    this.userService.clearUser();
    this.router.navigate(['/login'])
  }
  
  public async searchUser()
  {
    this.users = await this.userService.findUsers(this.searhName);
  }
  
  public async goToDialog(dialogId: string, userName: string){
    this.messageService.setDialogId(dialogId);
    this.messageService.setUserName(userName);
    this.dialogService.stopLoading();
    this.router.navigate(["/messages"])
  }
  
  public async createDialog(userId: string, userName: string) {
    let dialogId = await this.dialogService.createDialog(userId);
    this.messageService.setDialogId(dialogId);
    this.messageService.setUserName(userName);
    this.dialogService.stopLoading();
    this.router.navigate(["/messages"])
  }
  
  ngOnInit(): void {
  }

  ngOnDestroy() {
    if (this.timeout) {
      clearInterval(this.timeout);
    }
  }
}
