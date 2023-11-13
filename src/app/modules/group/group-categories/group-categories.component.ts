import { Component, Input, OnInit } from '@angular/core';
import { GroupCategoryList } from "src/app/modules/group/types";

@Component({
  selector: 'app-group-categories',
  templateUrl: './group-categories.component.html',
  styleUrls: ['./group-categories.component.css']
})
export class GroupCategoriesComponent implements OnInit {
  @Input('categories') categories: GroupCategoryList = []

  constructor() {
  }

  ngOnInit(): void {
  }

}
