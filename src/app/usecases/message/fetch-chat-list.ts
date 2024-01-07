import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';
import { ChatList } from 'src/app/modules/message/types';
import { QueryParamsService } from 'src/app/helpers/query-params.service';
import { MockService } from 'src/app/helpers/mock.service';

export class FetchChatList {
  queryParams;
  mock: ChatList;

  constructor(public apiService: ApiService) {
    this.queryParams = new QueryParamsService();
    const mockService = new MockService();
    this.mock = mockService.generate(10, () => {
      return {
        chatId: mockService._faker.string.nanoid(),
        type: mockService._faker.string.nanoid(),
        avatar: mockService._faker.image.avatar(),
        lastMessageTime: mockService._faker.date.anytime({
          refDate: new Date(),
        }),
        lastMessage: mockService._faker.string.sample(10),
        readNewMessage: mockService._faker.datatype.boolean(),
      };
    });
  }

  execute = (): Promise<ChatList> => {
    const url = `${environment.domain}api/fetch-chat-list`;
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(url).subscribe(
        (res: any) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  };
}
