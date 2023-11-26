import { Component, Input, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-feed-friend',
  templateUrl: './feed-friend.component.html',
})
export class FeedFriendComponent {
  constructor(private router: Router) {}

  @Input('friends') friends: any = [];
  postList: any = [];

  ngOnChanges(changes: SimpleChanges) {
    this.friends = changes['friends'].currentValue;
  }

  goUserPage = (userId: number) => {
    this.router.navigate(['user-detail', userId]);
  };
}
