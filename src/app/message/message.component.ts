import { Component, OnInit } from '@angular/core';
import { MessageService } from "../services/message.service";
import { MessageDTO } from "../dto/messageDTO";
import { Router } from "@angular/router";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
  styleUrls: ['./message.component.css']
})
export class MessageComponent implements OnInit {
  
  public userName: string = "";
  public currentUserId: string = "";
  public messages: MessageDTO[];
  public messageText: string;
  private timeout: any;
  constructor(private messageService:MessageService, private router:Router) {
    this.userName = messageService.getUserName();
    this.currentUserId = messageService.getDialogId();
    this.messageService.startMessaging();
    this.messages = [];
    this.messageText = "";
    this.timeout = setInterval(() => {
      this.messages = this.messageService.getMessages();
    }, 10000)
  }

  async sendMessage(){
      let newMessage = await this.messageService.sendMessage(this.messageText);
      this.messages.push(newMessage);
      this.messageText = "";
  }
  
  back(){
    console.log("кнопка нажата")
    this.messageService.stopMessaging();
    if (this.timeout) {
      clearInterval(this.timeout);
    }
    console.log("щас будет роут")
    this.router.navigate(["/dialogs"])
  }
  
  ngOnInit(): void {
  }

}
