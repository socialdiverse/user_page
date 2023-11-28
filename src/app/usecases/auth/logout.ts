import { ApiService } from 'src/app/helpers/api.service';
import { LocalStorage } from 'src/app/helpers/local-storage';
import { environment } from 'src/environments/environment';

export class Logout {
  constructor(private apiService: ApiService) {}
  url = environment.domain + 'api/auth/logout';
  execute = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
      return this.apiService.getWithToken(this.url).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  };
}
