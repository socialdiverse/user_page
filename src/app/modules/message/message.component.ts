import { Component, OnInit } from '@angular/core';
import { ChatRoom } from 'src/app/modules/message/types';
import { MessageService } from 'src/app/services/message.service';

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
  data: ChatRoom = {
    user: null,
    messages: [],
  };

  constructor(private messageService: MessageService) {}

  fetch() {
    this.messageService
      .fetch()
      .then((res: any) => {
        this.data = res;
      })
      .catch();
  }
  ngOnInit(): void {}
}
