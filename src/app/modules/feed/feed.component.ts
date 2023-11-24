import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { CreatePost } from 'src/app/usecases/feed/create-post';
import { FetchFriend } from 'src/app/usecases/feed/fetch-friend';
import { FetchPeople } from 'src/app/usecases/feed/fetch-people';
import { FetchPostList } from 'src/app/usecases/feed/fetch-post-list';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  fetchPeople;
  fetchFriend;
  fetchPostList;
  createPost;
  data = {
    people: [] as Object,
    friends: [] as Object,
    posts: [] as Object,
  };
  constructor(private apiService: ApiService) {
    this.fetchPeople = new FetchPeople(this.apiService);
    this.fetchFriend = new FetchFriend(this.apiService);
    this.fetchPostList = new FetchPostList(this.apiService);
    this.createPost = new CreatePost(this.apiService);
  }
  ngOnInit() {
    this.fetchPostList.execute().then((res) => {
      this.data.posts = res;
    });
    const people = this.fetchPeople.execute();
    const friends = this.fetchFriend.execute();
  }

  create_post = (post: any) => { 
    this.createPost.execute(post).then((res: any) => {
      this.data.posts = res;
    });
  };
}
