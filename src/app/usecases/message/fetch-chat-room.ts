import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';
import { QueryParamsService } from 'src/app/helpers/query-params.service';
import { MockService } from 'src/app/helpers/mock.service';
import { MediaType, MessageList } from 'src/app/modules/message/types';

export type ChatRoomRequest = {
  chatId: string;
  startTime: string;
  endTime: string;
};

export class FetchChatRoom {
  baseUrl = environment.domain + 'api/fetch-chat-room';

  mock: MessageList;
  queryParams;

  constructor(public apiService: ApiService) {
    const mockService = new MockService();
    this.queryParams = new QueryParamsService();
    this.mock = mockService.generate(100, () => {
      return {
        id: mockService._faker.string.nanoid(),
        content: mockService._faker.lorem.paragraph(),
        isMe: mockService._faker.datatype.boolean(),
        sender: {
          displayName: mockService._faker.person.fullName(),
          username: mockService._faker.person.firstName(),
          id: mockService._faker.string.nanoid(),
          avatarUrl: mockService._faker.image.avatar(),
          isOnline: mockService._faker.datatype.boolean(),
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
              isOnline: mockService._faker.datatype.boolean(),
            },
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
              isOnline: mockService._faker.datatype.boolean(),
            },
          },
        ],
      };
    });
  }

  execute = (
    userId: number,
    startTime: string,
    endTime: string
  ): Promise<MessageList> => {
    const url = `${this.baseUrl}?userId=${userId}&startTime=${startTime}&endTime=${endTime}`;
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(url).subscribe({
        error: () => {
          debugger;
          resolve(this.mock);
        },
        // error: reject
        next: resolve,
      });
    });
  };

  // execute = (request: ChatRoomRequest): Promise<any> => {
  //     const url = `${this.baseUrl}?${this.queryParams.stringify(request)}`;
  //     return new Promise((resolve, reject) => {
  //       this.apiService.getWithToken(url).subscribe(
  //         (res: any) => {
  //             resolve(this.mock)
  //         },
  //         (err) => {
  //           reject(err);
  //         }
  //       );
  //     });
  //   };
}
