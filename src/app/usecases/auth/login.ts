import { ApiService } from 'src/app/helpers/api.service';
import { LocalStorage } from 'src/app/helpers/local-storage';
import { environment } from 'src/environments/environment';

export class Login {
  constructor(
    public apiService: ApiService,
    private localStorage: LocalStorage
  ) {}
  url = environment.domain + 'api/auth/login';
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  execute = (email: string, password: string): Promise<Object> => {
    return new Promise((resolve, reject) => {
      return this.apiService.post(this.url, { email, password }).subscribe(
        (res) => {
          this.localStorage.set(
            this.authLocalStorageToken,
            JSON.stringify(res)
          );
          //resolve(res);
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  };
}
