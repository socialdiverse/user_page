import { environment } from 'src/environments/environment';
import { Injectable } from '@angular/core';
import { ApiService } from './http-service/api.service';

@Injectable({
  providedIn: 'root',
})
export class BaseService {
  constructor(private apiService: ApiService, private endpoint: string) {}
  url = environment.domain + 'api/'+ this.endpoint;

  get = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(this.url).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  };

  create = (param: any): Promise<Object> => {
    return new Promise((resolve, reject) => { 
      this.apiService.postWithToken(this.url, param).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  };

  put = (param: any): Promise<Object> => {
    return new Promise((resolve, reject) => { 
      this.apiService.updateWithToken(this.url, param).subscribe(
        (res) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  };

  delete = (): Promise<Object> => {
    return new Promise((resolve, reject) => { 
      this.apiService.deleteWithToken(this.url).subscribe(
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
