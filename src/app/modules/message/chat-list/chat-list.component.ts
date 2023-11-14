import { Component, OnInit } from '@angular/core';
import { MockService } from 'src/app/helpers/mock.service';
import { ChatList } from 'src/app/modules/message/types';

@Component({
  selector: 'app-chat-list',
  templateUrl: './chat-list.component.html',
})
export class ChatListComponent implements OnInit {
  chatList: ChatList = [];

  constructor(mockService: MockService) {
    this.chatList.push(
      ...mockService.generate(10, () => {
        return {
          id: mockService._faker.string.nanoid(),
          avatarUrl: mockService._faker.image.avatar(),
          name: mockService._faker.person.firstName(),
          lastMessage: mockService._faker.lorem.sentence(),
          lastMessageTime: mockService._faker.date.anytime({
            refDate: new Date(),
          }),
          unreadMessageCount: mockService._faker.number.int(10),
          isOnline: mockService._faker.datatype.boolean(),
        };
      })
    );
  }

  ngOnInit(): void {}
}
