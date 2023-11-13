import { Component, OnInit } from '@angular/core';
import {
  GroupCategoryList,
  GroupList,
  GroupPopularList,
  GroupSuggestionList,
  MyGroupList
} from "src/app/modules/group/types";
import { MockService } from "src/app/services/mock.service";

@Component({
  selector: 'app-group',
  templateUrl: './group.component.html',
  styleUrls: ['./group.component.css'],
})
export class GroupComponent implements OnInit {

  groupSuggestions: GroupList = [];
  groupPopulars: GroupPopularList = [];
  myGroups: MyGroupList = [];

  categories: GroupCategoryList = [];
  suggestions: GroupSuggestionList = [];

  constructor(mockService: MockService) {
    this.groupSuggestions = mockService.generate(4, () => {
      return {
        id: mockService._faker.string.nanoid(),
        backgroundUrl: mockService._faker.image.urlLoremFlickr(),
        avatarUrl: mockService._faker.image.avatar(),
        name: mockService._faker.company.name(),
        category: mockService._faker.company.buzzVerb(),
        membersCount: mockService._faker.number.int({ max: 1000 })
      }
    })

    this.groupPopulars = mockService.generate(4, () => {
      return {
        id: mockService._faker.string.nanoid(),
        backgroundUrl: mockService._faker.image.urlLoremFlickr(),
        avatarUrl: mockService._faker.image.urlLoremFlickr(),
        name: mockService._faker.company.name(),
        category: mockService._faker.company.buzzVerb(),
        membersCount: mockService._faker.number.int({ max: 1000 }),
        mutualFriends: [
          mockService._faker.image.urlLoremFlickr(),
          mockService._faker.image.urlLoremFlickr(),
          mockService._faker.image.urlLoremFlickr()
        ]
      }
    })

    this.myGroups = mockService.generate(4, () => {
      return {
        id: mockService._faker.string.nanoid(),
        backgroundUrl: mockService._faker.image.urlLoremFlickr(),
        name: mockService._faker.company.name(),
        category: mockService._faker.company.buzzVerb(),
        membersCount: mockService._faker.number.int({ max: 1000 }),
      }
    })

    this.categories = mockService.generate(12, () => {
      return {
        id: mockService._faker.string.nanoid(),
        name: mockService._faker.company.name(),
        imageUrl: mockService._faker.image.avatar(),
      }
    })

    this.suggestions = mockService.generate(4, () => {
      return {
        id: mockService._faker.string.nanoid(),
        backgroundUrl: mockService._faker.image.urlLoremFlickr(),
        avatarUrl: mockService._faker.image.urlLoremFlickr(),
        name: mockService._faker.company.name(),
        category: mockService._faker.company.buzzVerb(),
        membersCount: mockService._faker.number.int({ max: 1000 }),
        postInWeek: mockService._faker.number.int({ max: 100 }),
        mutualFriends: [
          mockService._faker.image.urlLoremFlickr(),
          mockService._faker.image.urlLoremFlickr(),
          mockService._faker.image.urlLoremFlickr()
        ]
      }
    })
  }

  ngOnInit(): void {
  }
}
