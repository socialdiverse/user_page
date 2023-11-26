import { Component, OnInit } from '@angular/core';
import { ApiService } from "src/app/helpers/api.service";
import { FetchChatList } from "src/app/usecases/message/fetch-chat-list";
import { ChatDataComponent } from "src/app/modules/message/types";
import { FetchChatRoom } from "src/app/usecases/message/fetch-chat-room";
import { FetchChatProfile } from "src/app/usecases/message/fetch-chat-profile";
import { FORMAT_DATE, formatDate } from "src/app/helpers/format-date";


@Component({
    selector: 'app-message',
    templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {
    data: ChatDataComponent = {
        user: null,
        messages: [],
        chats: []
    };
    fetchChatList
    fetchChatRoom
    fetchProfileUser

    constructor(private apiService: ApiService) {
        this.fetchChatList = new FetchChatList(this.apiService)
        this.fetchChatRoom = new FetchChatRoom(this.apiService)
        this.fetchProfileUser = new FetchChatProfile(this.apiService)
    }

    ngOnInit(): void {
        Promise.all([this.fetchProfileUser.execute({ id: '123' }), this.fetchChatList.execute({}), this.fetchChatRoom.execute({
            chatId: '123',
            startTime: formatDate(new Date(), FORMAT_DATE.YYYY_MM_DD),
            endTime: formatDate(new Date(), FORMAT_DATE.YYYY_MM_DD),

        })]).then(([user, chats, messages]) => {
            this.data.user = user;
            this.data.chats = chats;
            this.data.messages = messages;
        })

    }
}
