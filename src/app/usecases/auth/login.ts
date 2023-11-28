import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';

export class LoginUseCase {
  constructor(public apiService: ApiService) {}
  url = environment.domain + 'api/auth/login';

  execute = (account: string, password: string): Promise<Object> => {
    return new Promise((resolve, reject) => {
      return this.apiService
        .post(this.url, { email: account, password })
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
