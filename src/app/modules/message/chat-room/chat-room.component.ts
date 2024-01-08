import {
  Component,
  ElementRef,
  Input,
  SimpleChanges,
  ViewChild,
  EventEmitter,
  Output,
} from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { FetchChatMessage } from 'src/app/usecases/message/fetch-chat-message';
import { FORMAT_DATE, formatDate } from 'src/app/helpers/format-date';
import { FetchChatProfile } from 'src/app/usecases/message/fetch-chat-profile';
import { ChatMessage } from 'src/app/usecases/message/chat-message';
import { environment } from 'src/environments/environment';
import { LocalStorage } from 'src/app/helpers/local-storage';
import SignalRConnectionManager from 'src/app/helpers/signalr.service';
import { HubConnectionState } from '@microsoft/signalr';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent {
  content: string = '';
  @Input('chatId') chatId: number = 0;
  @Input('profile') profile: any = {};
  @Input() messages: any[] = [];
  @Output() messagesChanged = new EventEmitter<any[]>();

  updateMessages(newMessage: any) {
    this.messages.push(newMessage);
    this.messagesChanged.emit(this.messages); // Emit the updated messages to the parent
  }

  @ViewChild('scrollMe') private myScrollContainer!: ElementRef;
  fetchChatMessage;
  sendMessage;
  constructor(private apiService: ApiService) {
    this.fetchChatMessage = new FetchChatMessage(this.apiService);
    this.sendMessage = new ChatMessage(this.apiService);
  }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['chatId'] && changes['chatId'].currentValue !== undefined) {
      this.chatId = changes['chatId'].currentValue;
      this.onFetchChatRoom(this.chatId);
    }
  }

  scrollToBottom(): void {
    try {
      this.myScrollContainer.nativeElement.scrollTop =
        this.myScrollContainer.nativeElement.scrollHeight;
    } catch (err) {}
  }
  ngAfterViewChecked() {
    this.scrollToBottom();
  }

  onFetchChatRoom = (chatId: number) => {
    if (chatId > 0) {
      this.fetchChatMessage.execute(chatId).then((messages: any[]) => {
        this.messages = messages;
        this.messagesChanged.emit(this.messages);
      });
    }
  };

  ngOnInit() {
    this.scrollToBottom();
  }

  sendNewMessage = () => {
    if (this.profile.type == 'Private') {
      this.sendMessage.sendPrivateMessage(
        this.content,
        this.profile.members[0].user.id
      );
    } else {
      this.sendMessage.sendGroupChatMessage(
        this.content,
        this.chatId.toString()
      );
    }
    this.content = '';
  };
}
