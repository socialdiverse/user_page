import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ApiService } from 'src/app/helpers/api.service';
import { LocalStorage } from 'src/app/helpers/local-storage';
import { LoginUseCase } from 'src/app/usecases/auth/login';
import { environment } from 'src/environments/environment';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
})
export class LoginComponent {
  messageError: string = '';
  user: any = {
    account: '',
    password: '',
  };
  loginUseCase;
  constructor(
    private router: Router,
    private apiService: ApiService,
    private localStorage: LocalStorage
  ) {
    this.loginUseCase = new LoginUseCase(this.apiService);
  }

  signin() {
    this.loginUseCase.execute(this.user.account, this.user.password).then((res) => {
      const authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
      this.localStorage.set(authLocalStorageToken, JSON.stringify(res));
      this.router.navigate(['/']);
    });
  }
}
