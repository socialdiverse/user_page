import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';
import { LocalStorageService } from 'src/app/services/storage/local-storage.service';
import { environment } from 'src/environments/environment';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss'],
})
export class LoginComponent implements OnInit {
  messageError: string = '';
  user: any = {
    account: '',
    password: '',
  };
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  constructor(
    private router: Router,
    private authService: AuthService,
    private localStorageService: LocalStorageService
  ) {}

  ngOnInit(): void {}

  signin() {
    this.authService.login(this.user.account, this.user.password).subscribe(
      (res: any) => {
        if (res) {
          this.localStorageService.set(
            this.authLocalStorageToken,
            JSON.stringify(res)
          );
          this.router.navigate(['/']);
        } else {
          this.messageError = res.error.message || res.error;
        }
      },
      (err) => {
        this.messageError = err.error.message || err.error;
      }
    );
  }
}
