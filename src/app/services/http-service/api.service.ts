import { LocalStorageService } from './../storage/local-storage.service';
import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, of, throwError } from 'rxjs';
import { catchError, map, switchMap } from 'rxjs/operators';

import { STATUS_CODE } from '../../constants/variable';

@Injectable({
  providedIn: 'root',
})
export class ApiService {
  isCallCheckToken: BehaviorSubject<any>;
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  constructor(
    public httpClient: HttpClient,
    public localStorage: LocalStorageService
  ) {
    this.isCallCheckToken = new BehaviorSubject<boolean>(false);
  }

  get = (url: string) => {
    return this.httpClient.get(url);
  };

  post = (url: string, data: any) => {
    return this.httpClient.post(url, data);
  };

  getHeaders = () => {
    let user = this.localStorage.get(this.authLocalStorageToken);
    let token = user ? user['token'] : null;
    let headers = new HttpHeaders();
    headers = headers.set('Authorization', `${token}`);
    return headers;
  };

  postWithToken = (url: string, data: any): Observable<any> => {
    let headers = this.getHeaders();
    return this.httpClient
      .post(url, data, { observe: 'response', headers })
      .pipe(
        map((res: any) => {
          return res.body;
        }),
        catchError((err) => {
          if (err.status == STATUS_CODE.UNAUTHORIZED) {
            this.isCallCheckToken.next(true);
          }
          return throwError(err);
        })
      );
  };

  getWithToken = (url: string): Observable<any> => {
    let headers = this.getHeaders();
    return this.httpClient.get(url, { observe: 'response', headers }).pipe(
      map((res: any) => {
        return res.body;
      }),
      catchError((err) => {
        if (err.status == STATUS_CODE.UNAUTHORIZED) {
          this.isCallCheckToken.next(true);
        }
        return throwError(err);
      })
    );
  };

  deleteWithToken = (url: string): Observable<any> => {
    let headers = this.getHeaders();
    return this.httpClient.delete(url, { observe: 'response', headers }).pipe(
      map((res: any) => {
        return res.body;
      }),
      catchError((err) => {
        if (err.status == STATUS_CODE.UNAUTHORIZED) {
          this.isCallCheckToken.next(true);
        }
        return throwError(err);
      })
    );
  };

  uploadFileWithToken = (url: string, file: any): Observable<any> => {
    let headers = this.getHeaders();
    let form = new FormData();
    form.append('file', file);
    return this.httpClient.post(url, form, { headers });
  };
}
