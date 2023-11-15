import { LocalStorage } from './local-storage';
import { environment } from 'src/environments/environment';

import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse, HttpHeaders } from '@angular/common/http';

import { BehaviorSubject, Observable, throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { STATUS_CODE } from './const_variable';

@Injectable({
    providedIn: 'root',
})
export class ApiService {
    isCallCheckToken: BehaviorSubject<any>;
    private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

    constructor(
        public httpClient: HttpClient,
        public localStorage: LocalStorage
    ) {
        this.isCallCheckToken = new BehaviorSubject<boolean>(false);
    }

    get = (url: string) => {
        return this.httpClient.get(url).pipe(catchError(this.handleError));
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
                       catchError(this.handleError)
                   );
    };

    updateWithToken = (url: string, data: any): Observable<any> => {
        let headers = this.getHeaders();
        return this.httpClient
                   .patch(url, data, { observe: 'response', headers })
                   .pipe(
                       map((res: any) => {
                           return res.body;
                       }),
                       catchError(this.handleError)
                   );
    };

    getWithToken = (url: string) => {
        let headers = this.getHeaders();
        return this.httpClient.get(url, { observe: 'response', headers }).pipe(
            map((res: any) => {
                return res.body;
            }),
            catchError(this.handleError));
    };

    deleteWithToken = (url: string): Observable<any> => {
        let headers = this.getHeaders();
        return this.httpClient.delete(url, { observe: 'response', headers }).pipe(
            map((res: any) => {
                return res.body;
            }),
            catchError(this.handleError)
        );
    };

    uploadFileWithToken = (url: string, file: any): Observable<any> => {
        let headers = this.getHeaders();
        let form = new FormData();
        form.append('file', file);
        return this.httpClient.post(url, form, { headers });
    };

    private handleError(error: HttpErrorResponse) {


        switch (error.status) {
            case STATUS_CODE.CLIENT_OR_NETWORK:
                // TODO: push notification for user when disconnect network.
                console.error('An error occurred:', error.error);
                break;
            case STATUS_CODE.UNAUTHORIZED:
                this.isCallCheckToken.next(true);
                break;
            default:
                console.error(`Backend returned code ${error.status}, body was: `, error.error);
                break;
        }

        return throwError(() => error);
    }
}
