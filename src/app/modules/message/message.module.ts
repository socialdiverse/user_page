import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageRouting } from './message.routing';
import { MessageComponent } from './message.component';
import { ChatListComponent } from './chat-list/chat-list.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatProfileComponent } from './chat-profile/chat-profile.component';
import { TimeAgoDirective } from 'src/app/directives/time-ago.directive';

@NgModule({
  declarations: [
    MessageComponent,
    ChatListComponent,
    ChatRoomComponent,
    ChatProfileComponent,
  ],
  imports: [CommonModule, MessageRouting, TimeAgoDirective],
})
export class MessageModule {}
