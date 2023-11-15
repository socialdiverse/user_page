import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';

export class FetchTrend {
  constructor(public apiService: ApiService) {}
  url = environment.domain + 'api/fetch-trend';
  execute = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(this.url).subscribe(
        (res) => {
          const people = [
            {
              follower_number: '125k',
              people_name: 'SonMc',
              avatar: 'avatar-2.jpg',
            },
            {
              follower_number: '125k',
              people_name: 'SonMc',
              avatar: 'avatar-2.jpg',
            },
            {
              follower_number: '125k',
              people_name: 'SonMc',
              avatar: 'avatar-2.jpg',
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
