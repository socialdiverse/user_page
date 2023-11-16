import { ApiService } from 'src/app/helpers/api.service';
import { TagGroup } from 'src/app/modules/group/types';
import { environment } from 'src/environments/environment';

type JoinGroupRequest = {
  id: string;
};

export class JoinGroup {
  constructor(public apiService: ApiService) {}

  execute = (req: JoinGroupRequest): Promise<TagGroup> => {
    const url = `${environment.domain}api/group/${req.id}/join`;
    return new Promise((resolve, reject) => {
      this.apiService.getWithToken(url).subscribe({
        error: reject,
        next: resolve,
      });
    });
  };
}
