import { Component, Input, OnInit } from '@angular/core';
import { GroupSuggestionList } from "src/app/modules/group/types";

@Component({
  selector: 'app-group-suggest',
  templateUrl: './group-suggest.component.html',
  styleUrls: ['./group-suggest.component.css']
})
export class GroupSuggestComponent implements OnInit {
  @Input('suggestions') suggestions: GroupSuggestionList = []

  constructor() {
  }

  ngOnInit(): void {
  }

}
