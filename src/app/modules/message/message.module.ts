import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageRouting } from './message.routing';
import { OnlineFriendComponent } from '../feed/online-friend/online-friend.component';
import { MessageComponent } from './message.component';
import { ChatListComponent } from './chat-list/chat-list.component';

@NgModule({
  declarations: [OnlineFriendComponent, MessageComponent, ChatListComponent],
  imports: [CommonModule, MessageRouting],
})
export class MessageModule {}
