import { Component, OnInit } from '@angular/core';
import { ChatRoom } from 'src/app/modules/message/types';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  data: ChatRoom = {
    user: null,
    messages: [],
  };

  constructor() {}

  ngOnInit(): void {}
}
