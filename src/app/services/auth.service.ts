import { Injectable, OnDestroy } from '@angular/core';
import { Observable, BehaviorSubject, of, Subscription } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { Router } from '@angular/router';
import { environment } from 'src/environments/environment';
import { AuthHTTPService } from './http-service/auth-http.service';
import { LocalStorageService } from './storage/local-storage.service';
import { ApiService } from './http-service/api.service';

@Injectable({
  providedIn: 'root',
})
export class AuthService implements OnDestroy {
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  private unsubscribe: Subscription[] = [];

  isTokenInValid: BehaviorSubject<any>;
  API_URL = environment.apiUrl;

  constructor(
    private authHttpService: AuthHTTPService,
    private localStorageService: LocalStorageService,
    private router: Router,
    private apiService: ApiService
  ) {
    this.isTokenInValid = new BehaviorSubject<boolean>(false);
    this.apiService.isCallCheckToken.subscribe((res: any) => {
      if (res) {
        const authData = this.localStorageService.get(
          this.authLocalStorageToken
        );
        this.checkToken(authData);
      }
    });
  }

  login(email: string, password: string): Observable<any> {
    return this.authHttpService.login(email.trim(), password).pipe(
      map((res: any) => {
        const result = this.setAuthFromCookie(res.result);
        return result;
      }),
      catchError((err) => {
        return of(err);
      })
    );
  }

  logout = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
      let url = `${this.API_URL}auth/logout`;
      this.apiService.get(url).subscribe(
        (res: any) => {
          resolve(res);
        },
        (err: any) => {
          this.removeCurrentUser();
          reject(err);
        }
      );
    });
  };

  checkToken = (token: string): Promise<Object> => {
    return new Promise((resolve, reject) => {
      let url = `${this.API_URL}auth/checkToken`;
      if (token) {
        this.apiService.post(url, token).subscribe(
          (res: any) => {
            if (!res.tokenValid) {
              this.removeCurrentUser();
            }
            resolve(res);
          },
          (err: any) => {
            this.removeCurrentUser();
            reject(err);
          }
        );
      }
    });
  };
  private removeCurrentUser() {
    this.isTokenInValid.next(true);
    this.localStorageService.delete(this.authLocalStorageToken);
    this.router.navigate(['auth/login']);
  }

  private setAuthFromCookie(data: any): boolean {
    if (data && data.accessToken) {
      this.localStorageService.set(
        this.authLocalStorageToken,
        JSON.stringify(data)
      );
      return true;
    }
    return false;
  }

  ngOnDestroy() {
    this.unsubscribe.forEach((sb) => sb.unsubscribe());
  }
}
