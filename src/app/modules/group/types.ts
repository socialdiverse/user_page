export interface Group {
  id: string;
  backgroundUrl: string;
  avatarUrl: string;
  name: string;
  category: string;
  membersCount: number;
}

export type GroupList = Array<Group>

export type GroupPopular = Group & {
  // TODO: refer user type
  mutualFriends: any[]
}
export type GroupPopularList = Array<GroupPopular>

export type MyGroup = Omit<Group, 'avatarUrl'>
export type MyGroupList = Array<MyGroup>


export type GroupSuggestion = Group & {
  postInWeek: number;
  mutualFriends: any[]

}
export type GroupSuggestionList = Array<GroupSuggestion>


export type GroupCategory = {
  imageUrl: string;
  name: string;
}
export type GroupCategoryList = Array<GroupCategory>
