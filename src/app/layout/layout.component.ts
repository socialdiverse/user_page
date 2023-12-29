import { Component, OnInit } from '@angular/core';
import SignalRConnectionManager from '../helpers/signalr.service';

@Component({
  selector: 'app-layout',
  templateUrl: './layout.component.html',
})
export class LayoutComponent implements OnInit {
  constructor() {}

  ngOnInit(): void {
    const signalRConnection = new SignalRConnectionManager('chat');
    signalRConnection.connection.on('PushNotification', (context: any) => {
      console.log(context);
    });
  }
}
