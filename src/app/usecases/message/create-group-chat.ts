import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';

export class CreateGroupChat {
  constructor(public apiService: ApiService) {}
  url = environment.domain + 'api/create-group-chat';

  execute = (name: string, avatar: string): Promise<Object> => {
    return new Promise((resolve, reject) => {
      return this.apiService
        .postWithToken(this.url, { name, avatar })
        .subscribe(
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
