import { ApiService } from 'src/app/helpers/api.service';
import { LocalStorage } from 'src/app/helpers/local-storage';
import { environment } from 'src/environments/environment';

export class Logout {
  constructor(
    private apiService: ApiService,
    private localStorage: LocalStorage
  ) {}
  url = environment.domain + 'api/auth/logout';
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  execute = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
      return this.apiService.getWithToken(this.url).subscribe(
        (res) => {
          this.localStorage.set(
            this.authLocalStorageToken,
            JSON.stringify(null)
          );
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  };
}
