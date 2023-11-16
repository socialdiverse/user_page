import { Component, Input, OnInit } from '@angular/core';
import { TagGroupList } from 'src/app/modules/group/types';

@Component({
  selector: 'app-tag-group',
  templateUrl: './tag-group.component.html',
  styleUrls: ['./tag-group.component.css'],
})
export class TagGroupComponent implements OnInit {
  @Input('groupSuggestions') groupSuggestions: TagGroupList = [];
  @Input('groupPopulars') groupPopulars: TagGroupList = [];
  @Input('myGroups') myGroups: TagGroupList = [];

  constructor() {}

  ngOnInit(): void {}
}
