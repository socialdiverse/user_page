import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';

export type NotificationControlRequest = {
    enable?: boolean;
}

export class NotificationControl {
    constructor(public apiService: ApiService) {
    }

    execute = (req: NotificationControlRequest): Promise<any> => {
        const url = `${environment.domain}api/notification-control`;
        return new Promise((resolve, reject) => {
            this.apiService.postWithToken(url, req).subscribe(
                {
                    error: reject,
                    next: resolve,
                }
            );
        });
    };
}
