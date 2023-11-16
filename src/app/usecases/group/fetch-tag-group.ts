import { ApiService } from 'src/app/helpers/api.service';
import { MockService } from 'src/app/helpers/mock.service';
import { ETagGroup, TagGroupList } from 'src/app/modules/group/types';
import { environment } from 'src/environments/environment';

type TagGroupRequest = {
  type: ETagGroup;
};

export class FetchTagGroup {
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
        mutualFriends: [
          mockService._faker.image.urlLoremFlickr(),
          mockService._faker.image.urlLoremFlickr(),
          mockService._faker.image.urlLoremFlickr(),
        ],
      };
    });
  };

  execute = (req: TagGroupRequest): Promise<TagGroupList> => {
    const url = `${environment.domain}api/group/tag-group?type=${req.type}`;
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
