import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/helpers/api.service';
import { LocalStorage } from 'src/app/helpers/local-storage';
import { Logout } from 'src/app/usecases/auth/logout';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  logoutUsecase;
  constructor(
    private router: Router,
    private apiService: ApiService,
    private localStorage: LocalStorage
  ) {
    this.logoutUsecase = new Logout(this.apiService);
  }

  logout() {
    const authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
    this.localStorage.delete(authLocalStorageToken);
    this.router.navigate(['/auth/login']);
    // this.logoutUsecase.execute().then(() => {
    //   const authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
    //   this.localStorage.set(authLocalStorageToken, JSON.stringify(null));
    // });
  }
}
