import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';

export class RegisterUseCase {
  constructor(public apiService: ApiService) {}
  url = environment.domain + 'api/auth/register';

  execute = (user: any): Promise<Object> => {
    return new Promise((resolve, reject) => {
      return this.apiService.post(this.url, user).subscribe(
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
