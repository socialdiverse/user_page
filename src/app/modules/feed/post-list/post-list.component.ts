import { map } from 'rxjs/operators';
import {
  Component,
  Input,
  SimpleChanges,
  ViewEncapsulation,
} from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { POST_TYPE } from 'src/app/helpers/const-variable';
import { CommentOnPost } from 'src/app/usecases/comment/comment-on-post';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  encapsulation: ViewEncapsulation.None,
})
export class PostListComponent {
  @Input('posts') posts: any = [];
  commentOnPost;
  post_type = POST_TYPE;
  postList: any = [];
  cmt: any = {};
  
  constructor(private apiService: ApiService) {
    this.commentOnPost = new CommentOnPost(this.apiService);
  }
  
  ngOnChanges(changes: SimpleChanges) {
    this.posts = changes['posts'].currentValue;
  }
  comment = (postId: any) => {
    this.cmt.postId = postId;
    this.commentOnPost
      .execute(this.cmt)
      .then((res) => {
        const post = this.posts.find((x: any) => x.id == postId);
        post.comment.items.unshift(res);
        this.posts = this.posts.map((p: any) => {
          if (p.id == post.id) {
            return post;
          }
          return p;
        });
      })
      .catch();
  };
}
