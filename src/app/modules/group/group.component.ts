import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/helpers/api.service';
import { CreateGroup } from 'src/app/usecases/group/create-group';
import {
  ETagGroup,
  GroupCategoryList,
  GroupSuggestionList,
  TagGroupList,
} from 'src/app/modules/group/types';
import { FetchCategory } from 'src/app/usecases/group/fetch-categories';
import { FetchGroupSuggest } from 'src/app/usecases/group/fetch-group-suggest';
import { FetchTagGroup } from 'src/app/usecases/group/fetch-tag-group';
import UIkit from 'uikit';
@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {
  //
  groupSuggestions: TagGroupList = [];
  groupPopulars: TagGroupList = [];
  myGroups: TagGroupList = [];
  createGroup;

  categories: GroupCategoryList = [];
  suggestions: GroupSuggestionList = [];

  fetchTagGroup;
  fetchCategory;
  fetchSuggestions;

  constructor(apiService: ApiService) {
    this.fetchTagGroup = new FetchTagGroup(apiService);
    this.fetchCategory = new FetchCategory(apiService);
    this.fetchSuggestions = new FetchGroupSuggest(apiService);
    this.createGroup = new CreateGroup(apiService);
  }

  async ngOnInit() {
    Promise.all([
      this.fetchTagGroup.execute({ type: ETagGroup.SUGGESTION }),
      this.fetchTagGroup.execute({ type: ETagGroup.POPULAR }),
      this.fetchTagGroup.execute({ type: ETagGroup.SUGGESTION }),
      this.fetchCategory.execute(),
      this.fetchSuggestions.execute({ page: 1, pageSize: 4 }),
    ]).then(([r1, r2, r3, r4, r5]) => {
      this.groupSuggestions = r1;
      this.groupPopulars = r2;
      this.myGroups = r3;
      this.categories = r4;
      this.suggestions = r5;
    });
  }

  create_group = (post: any) => {
    this.createGroup.execute(post).then((res: any) => {
      UIkit.modal('#create-status').hide();
    });
  };
}
