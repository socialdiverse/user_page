import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { FetchChatList } from 'src/app/usecases/message/fetch-chat-list';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  fiends: any = [];
  fetchChatList;

  userIdSelected: number = 0;
  constructor(private apiService: ApiService) {
    this.fetchChatList = new FetchChatList(this.apiService);
  }

  ngOnInit(): void {
    this.fetchChatList.execute('a').then((res) => {
      this.fiends = res;
      this.userIdSelected = res.length > 0 ? parseInt(res[0].id) : 0;
    });
  }

  chatSelectedUser = (userId: number) => {
    this.userIdSelected = userId;
  };
}
