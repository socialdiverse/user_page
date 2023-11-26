import { Component, Input, SimpleChanges } from '@angular/core';
import { POST_TYPE } from 'src/app/helpers/const-variable';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
})
export class PostListComponent {
  @Input('posts') posts: any = [];
  post_type = POST_TYPE;
  postList: any = [];

  ngOnChanges(changes: SimpleChanges) {
    this.posts = changes['posts'].currentValue;
  }
}
