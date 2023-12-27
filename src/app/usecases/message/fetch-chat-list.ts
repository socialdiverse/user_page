import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';
import { ChatList } from 'src/app/modules/message/types';
import { QueryParamsService } from 'src/app/helpers/query-params.service';
import { MockService } from 'src/app/helpers/mock.service';

export type ChatListRequest = {
  name?: string;
};

export class FetchChatList {
  queryParams;
  mock: ChatList;

  constructor(public apiService: ApiService) {
    this.queryParams = new QueryParamsService();
    const mockService = new MockService();
    this.mock = mockService.generate(10, () => {
      return {
        userId: mockService._faker.string.nanoid(),
        chatId: mockService._faker.string.nanoid(),
        avatar: mockService._faker.image.avatar(),
        name: mockService._faker.person.firstName(),
        lastMessage: mockService._faker.lorem.sentence(),
        lastMessageTime: mockService._faker.date.anytime({
          refDate: new Date(),
        }),
        readNewMessage: mockService._faker.datatype.boolean(),
        isOnline: mockService._faker.datatype.boolean(),
      };
    });
  }

  execute = (req: ChatListRequest): Promise<ChatList> => {
    const url = `${environment.domain}api/fetch-chat-list`;
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(url).subscribe({
        error: () => {
          resolve(this.mock);
        },
        // error: reject
        next: resolve,
      });
    });
  };
}
