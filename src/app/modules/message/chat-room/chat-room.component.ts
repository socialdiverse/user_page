import { Component, Input, OnInit } from '@angular/core';
import { MessageList, ProfileUser } from "src/app/modules/message/types";

@Component({
  selector: 'app-chat-room',
  templateUrl: './chat-room.component.html',
  styleUrls: ['./chat-room.component.css'],
})
export class ChatRoomComponent implements OnInit {
  @Input('messages') messages: MessageList = [];
  @Input('profile') profile: ProfileUser | null = null;

  constructor() {
  }

  ngOnInit(): void {
    // TODO: map messages to [key, MessageItem], key is group by all message in day.
  }
}
