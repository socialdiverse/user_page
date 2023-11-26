import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-user-detail',
  templateUrl: './user-detail.component.html',
})
export class UserDetailComponent implements OnInit {
  user_id: number = 0;
  constructor(private actRoute: ActivatedRoute) {
    this.user_id = this.actRoute.snapshot.params['id'];
    console.log(this.user_id);
  }

  ngOnInit(): void {}
}
