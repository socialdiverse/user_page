import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';

export class CreatePost {
  constructor(public apiService: ApiService) {}
  url = environment.domain + 'api/create-post';
  execute = (post: any): Promise<Object> => {
    return new Promise((resolve, reject) => {
      this.apiService.postWithToken(this.url, post).subscribe(
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
