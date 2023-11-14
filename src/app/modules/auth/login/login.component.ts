import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/helpers/api.service';
import { LocalStorage } from 'src/app/helpers/local-storage';
import { Login } from 'src/app/usecases/auth/login';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent implements OnInit {
  messageError: string = '';
  user: any = {
    account: '',
    password: '',
  };
  login;
  constructor(
    private router: Router,
    private apiService: ApiService,
    private localStorage: LocalStorage
  ) {
    this.login = new Login(this.apiService, this.localStorage);
  }

  ngOnInit(): void {}

  signin() {
    this.login.execute(this.user.account, this.user.password);
    this.router.navigate(['/']);
  }
}
