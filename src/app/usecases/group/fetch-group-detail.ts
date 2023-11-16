import { ApiService } from 'src/app/helpers/api.service';
import { MockService } from 'src/app/helpers/mock.service';
import { TagGroup } from 'src/app/modules/group/types';
import { environment } from 'src/environments/environment';

type GroupDetailRequest = {
  id: string;
};

export class FetchGroupDetail {
  constructor(public apiService: ApiService) {}

  getMock = () => {
    const mockService = new MockService();

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
  };

  execute = (req: GroupDetailRequest): Promise<TagGroup> => {
    const url = `${environment.domain}api/group/${req.id}`;
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
