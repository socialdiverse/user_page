import { Injectable } from '@angular/core';
import {
  Router,
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
} from '@angular/router';
import { environment } from 'src/environments/environment';
import { LocalStorage } from '../helpers/local-storage';

@Injectable({ providedIn: 'root' })
export class AuthGuard implements CanActivate {
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  constructor(private router: Router, private localStorage: LocalStorage) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    let currentUser = this.localStorage.get(this.authLocalStorageToken);
    if (currentUser) {
      return true;
    }
    this.router.navigate(['auth/login']);
    return false;
  }
}
