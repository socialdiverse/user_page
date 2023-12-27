import { Component, Input, OnInit } from '@angular/core';
import {
  MessageItem,
  MessageList,
  ProfileUser,
} from 'src/app/modules/message/types';

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent implements OnInit {
  @Input('messages') messages: MessageList = [];
  @Input('profile') profile: ProfileUser | null = null;

  constructor() {}

  isSameSender = (
    messages: MessageList,
    m: MessageItem,
    i: number
  ): boolean => {
    return (
      i < messages.length - 1 &&
      (messages[i + 1].sender.id !== m.sender.id ||
        messages[i + 1].sender.id === undefined) &&
      !messages[i].isMe
    );
  };

  isLastMessage = (messages: MessageList, i: number): boolean => {
    return (
      i === messages.length - 1 &&
      !messages[messages.length - 1].isMe &&
      messages[messages.length - 1].sender.id !== null
    );
  };

  isSameUser = (messages: MessageList, m: MessageItem, i: number): boolean => {
    return i > 0 && messages[i - 1].sender.id === m.sender.id;
  };

  ngOnInit(): void {
    // TODO: map messages to [key, MessageItem], key is group by all message in day.
  }
}
