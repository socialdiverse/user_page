import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
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
  constructor(private apiService: ApiService) {
    this.fetchPeople = new FetchPeople(this.apiService);
    this.fetchFriend = new FetchFriend(this.apiService);
    this.fetchPostList = new FetchPostList(this.apiService);
  }

  data = {
    people: [] as Object,
    friends: [] as Object,
    posts: [] as Object,
  };

  async ngOnInit(): Promise<void> {
    const people = await this.fetchPeople.execute();
    const friends = await this.fetchFriend.execute();
    const posts = await this.fetchPostList.execute();
    this.data = {
      people,
      friends,
      posts,
    };
  }
}
