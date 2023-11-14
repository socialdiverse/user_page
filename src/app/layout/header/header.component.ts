import { Component } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { LocalStorage } from 'src/app/helpers/local-storage';
import { Logout } from 'src/app/usecases/auth/logout';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css'],
})
export class HeaderComponent {
  logoutUsecase;
  constructor(
    private apiService: ApiService,
    private localStorage: LocalStorage
  ) {
    this.logoutUsecase = new Logout(this.apiService, this.localStorage);
  }

  logout() {
    this.logoutUsecase.execute();
  }
}
