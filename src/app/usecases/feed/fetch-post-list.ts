import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';

export class FetchPostList {
  constructor(public apiService: ApiService) {}
  url = environment.domain + 'api/fetch-post-list';
  execute = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(this.url).subscribe(
        (res: any) => {
          // const posts = [
          //   {
          //     follower_number: '125k',
          //     people_name: 'SonMc',
          //     avatar: 'avatar-2.jpg',
          //     content:
          //       'Photography is the art of capturing light with a camera. It can be used to create images that tell stories, express emotions, or document reality. it can be fun, challenging, or rewarding. It can also be a hobby, a profession, or a passion',
          //     timePosted: '2 giờ trước',
          //     type: 1,
          //     likes: [],
          //     poster: {
          //       id: 1,
          //       full_name: 'Sơn Mc',
          //       avatar: '',
          //     },
          //     comment: {
          //       has_next: false,
          //       total: 5,
          //       items: [
          //         {
          //           id: 1,
          //           content: 'What a beautiful, I love it. ',
          //           user_commented: {
          //             id: 1,
          //             avatar: '',
          //             full_name: 'Steeve',
          //             like_number: 3,
          //           },
          //         },
          //         {
          //           id: 2,
          //           content: 'You captured the moment. ',
          //           user_commented: {
          //             id: 1,
          //             avatar: '',
          //             full_name: 'Steeve',
          //             like_number: 3,
          //           },
          //         },
          //       ],
          //     },
          //   },
          // ];
          resolve(res);
        },
        (err) => {
          reject(err);
        }
      );
    });
  };
}
