import { Component, Input, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { FetchChatRoom } from 'src/app/usecases/message/fetch-chat-room';
import { FORMAT_DATE, formatDate } from 'src/app/helpers/format-date';
import { FetchChatProfile } from 'src/app/usecases/message/fetch-chat-profile';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent {
  @Input('userId') userId: number = 0;
  messages: any = [];
  fetchChatRoom;
  fetchProfileUser;
  profile: any = {};

  constructor(private apiService: ApiService) {
    this.fetchChatRoom = new FetchChatRoom(this.apiService);
    this.fetchProfileUser = new FetchChatProfile(this.apiService);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.userId = changes['userId'].currentValue;
    this.onFetchChatRoom(this.userId);
    this.getUserProfile(this.userId);
  }

  onFetchChatRoom = (userId: number) => {
    if (userId > 0) {
      this.fetchChatRoom
        .execute(
          userId,
          formatDate(new Date(), FORMAT_DATE.YYYY_MM_DD),
          formatDate(new Date(), FORMAT_DATE.YYYY_MM_DD)
        )
        .then((messages: any) => {
          this.messages = messages;
        });
    }
  };

  getUserProfile = (userId: number) => {
    if (userId != 0) {
      this.fetchProfileUser.execute(userId).then((u) => {
        this.profile = u;
      });
    }
  };
}
