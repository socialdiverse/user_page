import { Component, Input, SimpleChanges } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { FetchChatProfile } from 'src/app/usecases/message/fetch-chat-profile';

@Component({
  selector: 'app-chat-profile',
  templateUrl: './chat-profile.component.html',
  styleUrls: ['./chat-profile.component.css'],
})
export class ChatProfileComponent {
  @Input('chatId') chatId: number = 0;
  @Input('profile') profile: any = {};
  fetchProfileUser;

  constructor(private apiService: ApiService) {
    this.fetchProfileUser = new FetchChatProfile(this.apiService);
  }
}
