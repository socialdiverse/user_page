import { ApiService } from 'src/app/helpers/api.service';
import { Component, Input, OnInit } from '@angular/core';
import { POST_TYPE } from 'src/app/helpers/const-variable';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
})
export class PostPreviewComponent implements OnInit {
  @Input() post: any;
  post_type = POST_TYPE;
  
  constructor(private apiService: ApiService) {    
  }  

  ngOnInit(): void {
  }  
}
