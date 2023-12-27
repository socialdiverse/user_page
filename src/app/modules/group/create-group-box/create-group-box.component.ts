import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { POST_ACCESS_MODIFIERS } from 'src/app/helpers/const-variable';

@Component({
  selector: 'app-create-group-box',
  templateUrl: './create-group-box.component.html',
})
export class CreateGroupBoxComponent implements OnInit {
  @Output() create_post = new EventEmitter<string>();
  access_modifiers = POST_ACCESS_MODIFIERS;

  post: any = {
    content: '',
    accessModify: this.access_modifiers[0].key,
  };

  ngOnInit(): void {}

  onCreatePost = () => {
    this.create_post.emit(this.post);
  };
}
