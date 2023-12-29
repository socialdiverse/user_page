import { Component, Input, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { FetchChatMessage } from 'src/app/usecases/message/fetch-chat-message';
import { FORMAT_DATE, formatDate } from 'src/app/helpers/format-date';
import { FetchChatProfile } from 'src/app/usecases/message/fetch-chat-profile';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent {
  @Input('chatId') chatId: number = 0;
  @Input('profile') profile: any = {};
  messages: any = [];
  fetchChatMessage;

  constructor(private apiService: ApiService) {
    this.fetchChatMessage = new FetchChatMessage(this.apiService);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chatId'] && changes['chatId'].currentValue !== undefined) {
      this.chatId = changes['chatId'].currentValue;
      this.onFetchChatRoom(this.chatId);
    }
  }

  onFetchChatRoom = (chatId: number) => {
    if (chatId > 0) {
      this.fetchChatMessage.execute(chatId).then((messages: any) => {
        this.messages = messages;
      });
    }
  };
}
