import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageRouting } from './message.routing';
import { ChatListComponent } from './chat-list/chat-list.component';

@NgModule({
  declarations: [
    ChatListComponent
  ],
  imports: [CommonModule, MessageRouting],
})
export class MessageModule {}
