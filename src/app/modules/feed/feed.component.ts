import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { LocalStorage } from 'src/app/helpers/local-storage';
import { CreatePost } from 'src/app/usecases/feed/create-post';
import { FetchFriend } from 'src/app/usecases/feed/fetch-friend';
import { FetchPeople } from 'src/app/usecases/feed/fetch-people';
import { FetchPostList } from 'src/app/usecases/feed/fetch-post-list';
import { environment } from 'src/environments/environment';
import UIkit from 'uikit';

@Component({
  selector: 'app-feed',
  templateUrl: './feed.component.html',
})
export class FeedComponent implements OnInit {
  fetchPeople;
  fetchFriend;
  fetchPostList;
  createPost;
  data: any = {
    people: [],
    friends: [],
    posts: [],
  };
  private authLocalStorageToken = `${environment.appVersion}-${environment.USERDATA_KEY}`;

  constructor(
    private apiService: ApiService,
    private localStorage: LocalStorage
  ) {
    this.fetchPeople = new FetchPeople(this.apiService);
    this.fetchFriend = new FetchFriend(this.apiService);
    this.fetchPostList = new FetchPostList(this.apiService);
    this.createPost = new CreatePost(this.apiService);
  }

  ngOnInit() {
    Promise.all([
      this.fetchPostList.execute(),
      this.fetchPeople.execute(),
      this.fetchFriend.execute(),
    ]).then(([posts, people, friends]) => {
      this.data.posts = posts;
      this.data.people = people;
      this.data.friends = friends;
    });
  }

  create_post = (post: any) => {
    const dataStorage = this.localStorage.get(this.authLocalStorageToken);
    post.userId = dataStorage.user.id;
    this.createPost.execute(post).then((res: any) => {
      this.data.posts.unshift(res);
      UIkit.modal('#create-status').hide();
    });
  };
}
