import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';

export class FetchPostList {
  constructor(public apiService: ApiService) {}
  url = environment.domain + 'api/fetch-post-list';
  execute = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(this.url).subscribe(
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
