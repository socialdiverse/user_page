import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';
import { ProfileUser } from 'src/app/modules/message/types';

export class FetchChatProfile {
  constructor(public apiService: ApiService) {}

  execute = (userId: number): Promise<ProfileUser> => {
    const url = `${environment.domain}api/fetch-chat-profile?userId=${userId}`;
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(url).subscribe(
        (res: any) => {
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  };
}
