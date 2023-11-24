import { Component, Input, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-comment',
  templateUrl: './comment.component.html',
})
export class CommentComponent {
  constructor() {}
  @Input('comment') comment: any = [];

  ngOnChanges(changes: SimpleChanges) {
    this.comment = changes['comment'].currentValue;
  }
}
