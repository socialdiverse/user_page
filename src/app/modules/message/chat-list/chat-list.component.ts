import { Component, Input, OnInit } from '@angular/core';
import { ChatList } from 'src/app/modules/message/types';

@Component({
    selector: 'app-chat-list',
    templateUrl: './chat-list.component.html',
})
export class ChatListComponent implements OnInit {
    @Input('chats') chatList: ChatList = []

    constructor() {
    }

    ngOnInit(): void {
    }
}
