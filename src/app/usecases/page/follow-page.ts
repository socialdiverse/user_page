import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';


export type FollowPagePayload = {
  pageId: number
}

export class FollowPage {
  constructor(public apiService: ApiService) {
  }

  execute = ({ pageId }: FollowPagePayload): Promise<any> => {
    const url = `${environment.domain}api/page${pageId}/follow`;
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(url).subscribe({
        error: reject,
        next: () => {
          resolve({
            status: 200,
            data: true
          })
        },
      });
    });
  };
}
