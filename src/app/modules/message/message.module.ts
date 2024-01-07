import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { MessageRouting } from './message.routing';
import { MessageComponent } from './message.component';
import { ChatRoomComponent } from './chat-room/chat-room.component';
import { ChatProfileComponent } from './chat-profile/chat-profile.component';
import { TimeAgoDirective } from 'src/app/directives/time-ago.directive';
import { CreateChatBoxComponent } from './create-chat-box/create-chat-box.component';
import {
  AlertCircle,
  CheckCircle,
  ChevronLeft,
  Files,
  Gift,
  Heart,
  Image,
  LucideAngularModule,
  Phone,
  PlusCircle,
  Send,
  Settings,
  Smile,
  Video,
} from 'lucide-angular';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    MessageComponent,
    ChatRoomComponent,
    ChatProfileComponent,
    CreateChatBoxComponent,
  ],
  imports: [
    CommonModule,
    FormsModule,
    MessageRouting,
    TimeAgoDirective,
    LucideAngularModule.pick({
      Smile,
      PlusCircle,
      Send,
      Heart,
      Settings,
      CheckCircle,
      ChevronLeft,
      Phone,
      Video,
      AlertCircle,
      Image,
      Files,
      Gift,
    }),
  ],
})
export class MessageModule {}
