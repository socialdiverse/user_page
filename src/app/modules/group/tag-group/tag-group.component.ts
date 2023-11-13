import { Component, Input, OnInit } from '@angular/core';
import { GroupList, GroupPopularList, MyGroupList } from "src/app/modules/group/types";

@Component({
  selector: 'app-tag-group',
  templateUrl: './tag-group.component.html',
  styleUrls: ['./tag-group.component.css']
})
export class TagGroupComponent implements OnInit {
  @Input('groupSuggestions') groupSuggestions: GroupList = []
  @Input('groupPopulars') groupPopulars: GroupPopularList = []
  @Input('myGroups') myGroups: MyGroupList = []

  constructor() {
  }

  ngOnInit(): void {
  }

}
