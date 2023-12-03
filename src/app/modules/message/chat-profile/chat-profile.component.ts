import { Component, Input, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { FetchChatProfile } from 'src/app/usecases/message/fetch-chat-profile';

@Component({
  selector: 'app-chat-profile',
  templateUrl: './chat-profile.component.html',
  styleUrls: ['./chat-profile.component.css'],
})
export class ChatProfileComponent {
  @Input('userId') userId: number = 0;

  fetchProfileUser;
  profile: any = {};

  constructor(private apiService: ApiService) {
    this.fetchProfileUser = new FetchChatProfile(this.apiService);
  }

  ngOnChanges(changes: SimpleChanges) {
    this.userId = changes['userId'].currentValue;
    this.getUserProfile(this.userId);
  }

  getUserProfile = (userId: number) => {
    if (userId != 0) {
      this.fetchProfileUser.execute(userId).then((u) => {
        this.profile = u;
      });
    }
  };
}
