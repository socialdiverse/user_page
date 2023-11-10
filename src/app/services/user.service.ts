import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { ApiService } from './http-service/api.service';

@Injectable({
  providedIn: 'root',
})
export class UserService {
  constructor(private apiService: ApiService) {}
  API_URL = environment.apiUrl + 'users';

  get = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
      let url = `${this.API_URL}`;
      this.apiService.getWithToken(url).subscribe(
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
