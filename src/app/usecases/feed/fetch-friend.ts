import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';

export class FetchFriend {
  constructor(public apiService: ApiService) {}
  url = environment.domain + 'api/fetch-feed-friend';
  execute = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(this.url).subscribe(
        (res) => {
          const people = [
            {
              id: 1,
              fullName: 'SonMc',
              avatar: 'avatar-2.jpg',
              isOnline: true,
            },
            {
              id: 2,
              fullName: 'SonMc',
              avatar: 'avatar-2.jpg',
              isOnline: true,
            },
            {
              id: 3,
              fullName: 'SonMc',
              avatar: 'avatar-2.jpg',
              isOnline: true,
            },
          ];
          //resolve(res);
          resolve(people);
        },
        (err) => {
          reject(err);
        }
      );
    });
  };
}
