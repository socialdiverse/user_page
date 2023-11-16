import { ApiService } from 'src/app/helpers/api.service';
import { MockService } from 'src/app/helpers/mock.service';
import { GroupSuggestionList } from 'src/app/modules/group/types';
import { environment } from 'src/environments/environment';

type GroupSuggestionRequest = {
  page: number;
  pageSize: number;
};

export class FetchGroupSuggest {
  constructor(public apiService: ApiService) {}

  getMock = () => {
    const mockService = new MockService();

    return mockService.generate(4, () => {
      return {
        id: mockService._faker.string.nanoid(),
        backgroundUrl: mockService._faker.image.urlLoremFlickr(),
        avatarUrl: mockService._faker.image.urlLoremFlickr(),
        name: mockService._faker.company.name(),
        category: mockService._faker.company.buzzVerb(),
        membersCount: mockService._faker.number.int({ max: 1000 }),
        postInWeek: mockService._faker.number.int({ max: 100 }),
        mutualFriends: [
          mockService._faker.image.urlLoremFlickr(),
          mockService._faker.image.urlLoremFlickr(),
          mockService._faker.image.urlLoremFlickr(),
        ],
      };
    });
  };

  execute = (req: GroupSuggestionRequest): Promise<GroupSuggestionList> => {
    const url = `${environment.domain}api/group/suggestions?page=${req.page}&pageSize=${req.pageSize}`;
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(url).subscribe({
        // error: reject,
        error: (err) => {
          resolve(this.getMock());
        },
        next: resolve,
      });
    });
  };
}
