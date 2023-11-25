import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';


export type LikePagePayload = {
  pageId: number
}

export class LikePage {
  constructor(public apiService: ApiService) {
  }

  execute = ({ pageId }: LikePagePayload): Promise<any> => {
    const url = `${environment.domain}api/page${pageId}/like`;
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
