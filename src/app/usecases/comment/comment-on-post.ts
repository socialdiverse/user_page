import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment'; 
export class CommentOnPost {
  constructor(public apiService: ApiService) { 
  }

  execute = (cmt: any): Promise<any> => {
    const url = `${environment.domain}api/comment-on-post`;
    return new Promise((resolve, reject) => {
      this.apiService.postWithToken(url, cmt).subscribe(
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
