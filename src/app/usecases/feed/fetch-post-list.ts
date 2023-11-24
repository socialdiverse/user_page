import { ApiService } from 'src/app/helpers/api.service';
import { POST_TYPE } from 'src/app/helpers/const_variable';
import { environment } from 'src/environments/environment';

export class FetchPostList {
  constructor(public apiService: ApiService) {}
  url = environment.domain + 'api/fetch-post-list';
  execute = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(this.url).subscribe(
        (res: any) => {
          const posts = [
            {
              content:
                'Photography is the art of capturing light with a camera. It can be used to create images that tell stories, express emotions, or document reality. it can be fun, challenging, or rewarding. It can also be a hobby, a profession, or a passion',
              time_posted: '2 giờ trước',
              type: POST_TYPE.POST_TEXT,
              like_number: '1,555',
              user_posted: {
                id: 1,
                full_name: 'Sơn Mc',
                avatar: '',
              },
              comment: {
                has_next: false,
                total: 5,
                items: [
                  {
                    id: 1,
                    content: 'What a beautiful, I love it. ',
                    user_commented: {
                      id: 1,
                      avatar: '',
                      full_name: 'Steeve',
                      like_number: 3,
                    },
                  },
                  {
                    id: 2,
                    content: 'You captured the moment. ',
                    user_commented: {
                      id: 1,
                      avatar: '',
                      full_name: 'Steeve',
                      like_number: 3,
                    },
                  },
                ],
              },
            },
          ];
          //resolve(res);
          resolve(posts);
        },
        (err) => {
          reject(err);
        }
      );
    });
  };
}
