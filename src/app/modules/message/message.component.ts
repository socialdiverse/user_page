import { Component, OnInit, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { FetchChatList } from 'src/app/usecases/message/fetch-chat-list';
import { FetchChatProfile } from 'src/app/usecases/message/fetch-chat-profile';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  privateList: any = [];
  fetchChatList;
  fetchchatProfile;
  chatIdSelected: number = 0;
  profile: any = {};
  constructor(private apiService: ApiService) {
    this.fetchChatList = new FetchChatList(this.apiService);
    this.fetchchatProfile = new FetchChatProfile(this.apiService);
  }

  ngOnInit(): void {
    this.fetchChatList.execute().then((res) => {
      this.privateList = res;
      this.chatIdSelected = res.length > 0 ? parseInt(res[0].chatId) : 0;
      this.profile = this.onFetchProfile(this.chatIdSelected);
    });
  }

  selectedChat = (chatId: number) => {
    console.log(chatId);
    this.chatIdSelected = chatId;
    console.log(this.chatIdSelected);
    this.profile = this.onFetchProfile(this.chatIdSelected);
  };

  onFetchProfile = (chatId: number) => {
    var userId = this.privateList.find(
      (chat: any) => chat.chatId == chatId
    ).userId;

    if (userId > 0) {
      this.fetchchatProfile.execute(userId).then((res: any) => {
        this.profile = res;
      });
    }
  };
}
