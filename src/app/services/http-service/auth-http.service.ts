import { environment } from './../../../environments/environment';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

const API_URL = `${environment.apiUrl}auth/`;

@Injectable({
  providedIn: 'root',
})
export class AuthHTTPService {
  constructor(private http: HttpClient) {}

  login(email: string, password: string): Observable<any> {
    return this.http.post<any>(API_URL + 'login', {
      username: email,
      password,
    });
  }

  logout(url: string): Observable<any> {
    return this.http.get(url);
  }

  createUser(user: any): Observable<any> {
    return this.http.post<any>(API_URL, user);
  }

  forgotPassword(email: string): Observable<boolean> {
    return this.http.post<boolean>(`${API_URL}/forgot-password`, {
      email,
    });
  }
}
