import { Component, OnInit } from '@angular/core';
import { ChatRoom, MediaType } from "src/app/modules/message/types";
import { MockService } from "src/app/services/mock.service";

@Component({
  selector: 'app-message',
  templateUrl: './message.component.html',
})
export class MessageComponent implements OnInit {

  data: ChatRoom = {
    user: null,
    messages: []
  }

  constructor(mockService: MockService) {
    this.data.user = {
      displayName: mockService._faker.person.fullName(),
      username: mockService._faker.person.firstName(),
      id: mockService._faker.string.nanoid(),
      avatarUrl: mockService._faker.image.avatar(),
      isOnline: mockService._faker.datatype.boolean()
    }
    this.data.messages = mockService.generate(100, () => {
      return {
        id: mockService._faker.string.nanoid(),
        content: mockService._faker.lorem.paragraph(),
        isMe: mockService._faker.datatype.boolean(),
        sender: {
          displayName: mockService._faker.person.fullName(),
          username: mockService._faker.person.firstName(),
          id: mockService._faker.string.nanoid(),
          avatarUrl: mockService._faker.image.avatar(),
          isOnline: mockService._faker.datatype.boolean()
        },
        createdAt: mockService._faker.date.anytime(),
        updatedAt: mockService._faker.date.anytime(),
        replyRef: null,
        mediaList: [
          {
            id: mockService._faker.string.nanoid(),
            type: MediaType.Image,
            link: mockService._faker.image.urlPicsumPhotos(),
            sender: {
              displayName: mockService._faker.person.fullName(),
              username: mockService._faker.person.firstName(),
              id: mockService._faker.string.nanoid(),
              avatarUrl: mockService._faker.image.avatar(),
              isOnline: mockService._faker.datatype.boolean()
            }
          },
          {
            id: mockService._faker.string.nanoid(),
            type: MediaType.Image,
            link: mockService._faker.image.urlPicsumPhotos(),
            sender: {
              displayName: mockService._faker.person.fullName(),
              username: mockService._faker.person.firstName(),
              id: mockService._faker.string.nanoid(),
              avatarUrl: mockService._faker.image.avatar(),
              isOnline: mockService._faker.datatype.boolean()
            }
          },
        ]
      }
    })
  }

  ngOnInit(): void {
  }
}
