import { ApiService } from 'src/app/helpers/api.service';
import { MockService } from 'src/app/helpers/mock.service';
import { GroupCategoryList } from 'src/app/modules/group/types';
import { environment } from 'src/environments/environment';

export class FetchCategory {
  constructor(public apiService: ApiService) {}

  getMock = () => {
    const mockService = new MockService();

    return mockService.generate(20, () => {
      return {
        image: mockService._faker.image.urlLoremFlickr(),
        name: mockService._faker.company.buzzVerb(),
      };
    });
  };

  execute = (): Promise<GroupCategoryList> => {
    const url = `${environment.domain}api/fetch-categories`;
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(url).subscribe({
        // error: reject,
        error: (err) => {
          resolve(this.getMock());
        },
        next: (response) => {
          resolve(response.result || []);
        },
      });
    });
  };
}
