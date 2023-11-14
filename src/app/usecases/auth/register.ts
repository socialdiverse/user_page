import { ApiService } from 'src/app/helpers/api.service';
import { environment } from 'src/environments/environment';

export class Register {
  constructor(public apiService: ApiService) {}

  execute = (): Promise<Object> => {
    return new Promise((resolve, reject) => {});
  };
}
