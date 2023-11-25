import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';

export type JoinEventPayload = {
  id: number;
}

export class JoinEvent {
  constructor(public apiService: ApiService) {
  }

  execute = ({ id }: JoinEventPayload): Promise<any> => {
    const url = `${environment.domain}api/event/${id}/join`;
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(url).subscribe({
        // error: reject,
        error: (err) => {
          resolve({
            status: 200,
            data: true
          });
        },
        next: resolve,
      });
    });
  };
}
