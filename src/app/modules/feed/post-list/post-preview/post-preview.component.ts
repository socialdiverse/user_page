import { ApiService } from 'src/app/helpers/api.service';
import { Component, Input, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-post-preview',
  templateUrl: './post-preview.component.html',
})
export class PostPreviewComponent implements OnInit {
  @Input() postImages!: any;
  
  constructor(private apiService: ApiService) {    
  }

  ngOnChanges(changes: SimpleChanges) {
  }

  ngOnInit(): void {
  }  
}
