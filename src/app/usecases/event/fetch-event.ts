import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';
import { QueryParamsService } from "src/app/helpers/query-params.service";

export enum EventType {
  Suggestion,
  Popular,
  MyEvents,
  UpComming
}

export type EventPayload = {
  page: number;
  pageSize: number;
  type: EventType
}

export class FetchEvent {
  constructor(public apiService: ApiService) {
  }

  execute = (payload: EventPayload): Promise<any> => {
    const queryParams = new QueryParamsService()
    const url = `${environment.domain}api/event${queryParams.stringify(payload)}`;
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(url).subscribe({
        // error: reject,
        error: (err) => {
          resolve({
            status: 200,
            data: [
              {
                id: 1,
                imageUrl: 'image-1',
                startTime: new Date(),
                endTime: new Date(),
                title: 'Aloha',
                location: "Japan",
                interestingNumber: 100,
                goingNumber: 100
              }
            ]
          });
        },
        next: resolve,
      });
    });
  };
}
