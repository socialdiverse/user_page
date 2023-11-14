import { environment } from 'src/environments/environment';
import { Inject, Injectable } from '@angular/core';
import { ApiService } from './http-service/api.service';
import { BaseService } from './base.service';

@Injectable({
  providedIn: 'root',
})
export class PageService extends BaseService {
  constructor(@Inject(ApiService) apiService: ApiService) {
    super(apiService, 'blogs');
  }
}
