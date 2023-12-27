import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { FetchChatList } from 'src/app/usecases/message/fetch-chat-list';
import { ChatDataComponent } from 'src/app/modules/message/types';
import { FetchChatMessage } from 'src/app/usecases/message/fetch-chat-message';
import { FetchChatProfile } from 'src/app/usecases/message/fetch-chat-profile';
import { FORMAT_DATE, formatDate } from 'src/app/helpers/format-date';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  data: ChatDataComponent = {
    user: null,
    messages: [],
    chats: [],
  };
  fetchChatList;
  fetchChatMessage;
  fetchProfileUser;

  constructor(private apiService: ApiService) {
    this.fetchChatList = new FetchChatList(this.apiService);
    this.fetchChatMessage = new FetchChatMessage(this.apiService);
    this.fetchProfileUser = new FetchChatProfile(this.apiService);
  }

  ngOnInit(): void {
    this.fetchChatList.execute({}).then((chats: any) => {
      this.data.chats = chats;

      this.fetchProfileUser
        .execute({ id: this.data.chats[0]?.userId })
        .then((user: any) => {
          this.data.user = user;
        });

      this.fetchChatMessage
        .execute({
          chatId: this.data.chats[0].chatId,
        })
        .then((messages: any) => {
          this.data.messages = messages;
        });
    });
  }
}
