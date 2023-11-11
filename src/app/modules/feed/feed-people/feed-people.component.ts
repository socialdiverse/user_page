import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-people',
  templateUrl: './feed-people.component.html',
})
export class FeedPeopleComponent implements OnInit {
  constructor() {}
  people: any = [
    {
      follower_number: '125k',
      people_name: 'SonMc',
      avatar: 'avatar-2.jpg',
    },
    {
      follower_number: '125k',
      people_name: 'SonMc',
      avatar: 'avatar-2.jpg',
    },
    {
      follower_number: '125k',
      people_name: 'SonMc',
      avatar: 'avatar-2.jpg',
    },
  ];
  ngOnInit(): void {}
}
