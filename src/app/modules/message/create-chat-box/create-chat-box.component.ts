import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { CreateGroupChat } from 'src/app/usecases/message/create-group-chat';

@Component({
  selector: 'app-create-chat-box',
  templateUrl: './create-chat-box.component.html',
})
export class CreateChatBoxComponent implements OnInit {
  chatbox: any = {
    name: '',
    avatarLink: '',
  };
  createGroupChat;
  constructor(private apiService: ApiService) {
    this.createGroupChat = new CreateGroupChat(this.apiService);
  }

  ngOnInit(): void {}

  createNewGroupChat() {
    this.createGroupChat
      .execute(this.chatbox.name, this.chatbox.avatarLink)
      .then((res) => {});
  }
}
