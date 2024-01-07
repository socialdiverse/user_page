import { Component, OnInit } from '@angular/core';
import SignalRConnectionManager from '../helpers/signalr.service';
import { environment } from 'src/environments/environment';
import { LocalStorage } from '../helpers/local-storage';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;
  constructor(private localStorage: LocalStorage) {}

  ngOnInit(): void {
    let currentUser = this.localStorage.get(this.authLocalStorageToken);

    const signalRConnection = new SignalRConnectionManager(
      `chat?userId=${currentUser.user.id}`
    );
    signalRConnection.connection.on('PushNotification', (context: any) => {
      console.log(context);
    });
  }
}
