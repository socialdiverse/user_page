import * as signalR from '@microsoft/signalr';
import { environment } from 'src/environments/environment';

class SignalRConnectionManager {
  connection;
  constructor(path: string) {
    const URL = environment.domain;
    this.connection = new signalR.HubConnectionBuilder()
      .withUrl(URL + path, {
        skipNegotiation: true,
        transport: signalR.HttpTransportType.WebSockets,
      })
      .configureLogging(signalR.LogLevel.Information)
      .withAutomaticReconnect()
      .build();
    this.startConnection();
  }
  private startConnection() {
    this.connection.start().then(() => {
      console.log(this.connection.state);
    });
  }
}

export default SignalRConnectionManager;
