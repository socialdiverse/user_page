import { ApiService } from 'src/app/helpers/api.service';
import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
})
export class PostPreviewComponent implements OnInit {
  @Input('posts') posts: any = [];
  
  constructor(private apiService: ApiService) {    
  }  

  ngOnInit(): void {

  }  
}
