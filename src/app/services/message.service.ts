import { Inject, Injectable } from '@angular/core';
import { ApiService } from './http-service/api.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class MessageService extends BaseService {
  constructor(@Inject(ApiService) apiService: ApiService) {
    super(apiService, 'message');
  }

  fetch = (): Promise<Object> => {
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(this.url).subscribe(
        (res) => {
          const user = {
            displayName: 'mockService._faker.person.fullName()',
            username: 'mockService._faker.person.firstName()',
            id: 'mockService._faker.string.nanoid()',
            avatarUrl: ' mockService._faker.image.avatar()',
            isOnline: 'mockService._faker.datatype.boolean()',
          };
          const messages = [
            {
              id: 'mockService._faker.string.nanoid()',
              content: 'mockService._faker.lorem.paragraph()',
              isMe: 'mockService._faker.datatype.boolean()',
              sender: {
                displayName: 'mockService._faker.person.fullName()',
                username: 'mockService._faker.person.firstName()',
                id: 'mockService._faker.string.nanoid()',
                avatarUrl: 'mockService._faker.image.avatar()',
                isOnline: 'mockService._faker.datatype.boolean()',
              },
              createdAt: 'mockService._faker.date.anytime()',
              updatedAt: 'mockService._faker.date.anytime()',
              replyRef: null,
              mediaList: [
                {
                  id: 'mockService._faker.string.nanoid()',
                  type: 'MediaType.Image',
                  link: 'mockService._faker.image.urlPicsumPhotos()',
                  sender: {
                    displayName: 'mockService._faker.person.fullName()',
                    username: 'mockService._faker.person.firstName()',
                    id: 'mockService._faker.string.nanoid()',
                    avatarUrl: ' mockService._faker.image.avatar()',
                    isOnline: 'mockService._faker.datatype.boolean()',
                  },
                },
                {
                  id: 'mockService._faker.string.nanoid()',
                  type: 'MediaType.Image',
                  link: 'mockService._faker.image.urlPicsumPhotos()',
                  sender: {
                    displayName: ' mockService._faker.person.fullName()',
                    username: 'mockService._faker.person.firstName()',
                    id: 'mockService._faker.string.nanoid()',
                    avatarUrl: 'mockService._faker.image.avatar()',
                    isOnline: 'mockService._faker.datatype.boolean()',
                  },
                },
              ],
            },
          ];

          const data = {
            user,
            messages,
          };
          //resolve(res);
          resolve(data);
        },
        (err) => {
          reject(err);
        }
      );
    });
  };
}
