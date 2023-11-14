import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-feed-people',
  templateUrl: './feed-people.component.html',
})
export class FeedPeopleComponent implements OnInit {
  constructor() {}
  people: any = [];
  ngOnInit(): void {}
}
