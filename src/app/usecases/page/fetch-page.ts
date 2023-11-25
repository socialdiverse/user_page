import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';
import { QueryParamsService } from "src/app/helpers/query-params.service";

export enum PageType {
  Suggestion,
  Popular,
  MyEvents,
}

export type PagePayload = {
  page: number;
  pageSize: number;
  type: PageType
}

export class FetchPage {
  constructor(public apiService: ApiService) {
  }

  execute = (payload: PagePayload): Promise<any> => {
    const queryParams = new QueryParamsService()
    const url = `${environment.domain}api/page${queryParams.stringify(payload)}`;
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(url).subscribe({
        error: reject,
        next: () => {
          resolve({
            status: 200,
            data: {
              persons: [
                {
                  id: 1,
                  location: "Dubai",
                  name: "Jesse Steve",
                  imageUrl: "avatar1"
                }
              ],
              pages: [
                {
                  id: 1,
                  imageUrl: "avatar1",
                  title: "CHợ làng lá",
                  following: 10000,
                  isFollowed: false,
                  isLiked: false
                }
              ]
            }
          })
        },
      });
    });
  };
}
