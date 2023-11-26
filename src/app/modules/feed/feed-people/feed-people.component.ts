import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-feed-people',
  templateUrl: './feed-people.component.html',
})
export class FeedPeopleComponent {
  constructor() {}

  @Input('people') people: any = [];
  postList: any = [];

  ngOnChanges(changes: SimpleChanges) {
    this.people = changes['people'].currentValue;
  }
}
