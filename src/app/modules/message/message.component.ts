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
  fetchChatList;
  fetchchatProfile;
  connectionId: string = '';
  public connection;
  chatIdSelected: number = 0;
  profile: any = {};
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  constructor(
    private apiService: ApiService,
    private localStorage: LocalStorage
  ) {
    this.fetchChatList = new FetchChatList(this.apiService);
    this.fetchchatProfile = new FetchChatProfile(this.apiService);
    this.connection = new SignalRConnectionManager(
      `chat?userId=${this.localStorage.get(this.authLocalStorageToken).user.id}`
    ).connection;
    this.connection.on('ReceiveConnectionId', (connectionId: string) => {
      this.connectionId = connectionId;
    });
    console.log(this.connection.state);
  }

  ngOnInit(): void {
    this.fetchChatList.execute().then((res) => {
      this.chatList = res;
      this.chatIdSelected = res.length > 0 ? parseInt(res[0].chatId) : 0;
      this.profile = this.onFetchProfile(this.chatIdSelected);
      // this.joinRoom(this.chatIdSelected);
    });
  }

  public async joinRoom(chatIdSelected: number) {
    console.log(this.connection.state);

    this.connection
      .invoke('JoinChat', {
        connectionId: this.connectionId,
        chatId: this.selectedChat,
      })
      .catch((err) => {
        console.error(err.toString());
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
