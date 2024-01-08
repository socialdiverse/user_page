import { Component, OnInit, SimpleChanges } from '@angular/core';
import { HubConnectionState } from '@microsoft/signalr';
import { ApiService } from 'src/app/helpers/api.service';
import { LocalStorage } from 'src/app/helpers/local-storage';
import SignalRConnectionManager from 'src/app/helpers/signalr.service';
import { FetchChatList } from 'src/app/usecases/message/fetch-chat-list';
import { FetchChatProfile } from 'src/app/usecases/message/fetch-chat-profile';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  chatList: any = [];
  parentMessages: any[] = [];
  fetchChatList;
  fetchchatProfile;
  connection: any;
  chatIdSelected: number = 0;
  profile: any = {};
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  constructor(
    private apiService: ApiService,
    private localStorage: LocalStorage
  ) {
    this.fetchChatList = new FetchChatList(this.apiService);
    this.fetchchatProfile = new FetchChatProfile(this.apiService);
  }
  handleMessagesChange(newMessages: any[]) {
    this.parentMessages = newMessages;
  }

  async initializeConnection() {
    return new Promise<void>((resolve) => {
      this.connection = new SignalRConnectionManager(
        `chat?userId=${
          this.localStorage.get(this.authLocalStorageToken).user.id
        }`
      ).connection;

      this.connection.on('ReceiveConnectionId', (connectionId: string) => {
        resolve();
      });
    });
  }

  ngOnInit() {
    this.fetchChatList.execute().then((res) => {
      this.chatList = res;
      this.chatIdSelected = res.length > 0 ? parseInt(res[0].chatId) : 0;
      this.profile = this.onFetchProfile(this.chatIdSelected);
      this.initializeConnection().then(() => {
        this.joinRoom(this.chatIdSelected);
      });
    });
  }

  ngOnChanges(changes: SimpleChanges) {}
  public async joinRoom(chatIdSelected: number) {
    this.connection.invoke('JoinChat', chatIdSelected.toString());
    this.connection.on('SendMessage', (data: any) => {
      if (
        data.sender.id ===
        this.localStorage.get(this.authLocalStorageToken).user.id
      ) {
        data.isMe = true;
      }
      this.parentMessages.push(data);
    });
  }

  selectedChat = (chatId: number) => {
    this.chatIdSelected = chatId;
    this.profile = this.onFetchProfile(this.chatIdSelected);
  };

  onFetchProfile = (chatId: number) => {
    return this.chatList.find((chat: any) => chat.chatId == chatId);
  };
}
