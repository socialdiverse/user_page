import {
  Component,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
} from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { FetchChatMessage } from 'src/app/usecases/message/fetch-chat-message';
import { FORMAT_DATE, formatDate } from 'src/app/helpers/format-date';
import { FetchChatProfile } from 'src/app/usecases/message/fetch-chat-profile';
import { ChatMessage } from 'src/app/usecases/message/chat-message';
import { environment } from 'src/environments/environment';
import { LocalStorage } from 'src/app/helpers/local-storage';
import SignalRConnectionManager from 'src/app/helpers/signalr.service';
import { HubConnectionState } from '@microsoft/signalr';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent {
  content: string = '';
  @Input('chatId') chatId: number = 0;
  @Input('profile') profile: any = {};
  messages: any = [];
  fetchChatMessage;
  sendMessage;
  public connection;
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  constructor(
    private apiService: ApiService,
    private localStorage: LocalStorage
  ) {
    this.fetchChatMessage = new FetchChatMessage(this.apiService);
    this.sendMessage = new ChatMessage(this.apiService);
    this.connection = new SignalRConnectionManager(
      `chat?userId=${this.localStorage.get(this.authLocalStorageToken).user.id}`
    ).connection;
    this.connection.on('SendMessage', (context: any) => {
      console.log('loen');
    });
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

  sendNewMessage = () => {
    if (this.profile.type == 'Private') {
      this.sendMessage.sendPrivateMessage(
        this.content,
        this.profile.members[0].user.id
      );
    } else {
      this.sendMessage.sendGroupChatMessage(
        this.content,
        this.chatId.toString()
      );
    }
    this.onFetchChatRoom(this.chatId);
  };
}
