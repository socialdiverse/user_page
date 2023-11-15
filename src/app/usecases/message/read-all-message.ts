import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';


export class ReadAllMessage {
    constructor(public apiService: ApiService) {
    }

    execute = (): Promise<any> => {
        const url = `${environment.domain}api/read-all-message`;
        return new Promise((resolve, reject) => {
            this.apiService.getWithToken(url).subscribe(
                {
                    error: reject,
                    next: resolve,
                }
            );
        });
    };
}
