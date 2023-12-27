export type TagGroup = {
  id: string;
  backgroundUrl: string;
  avatarUrl: string;
  name: string;
  category: string;
  membersCount: number;
  mutualFriends: any[];
};

export type TagGroupList = Array<TagGroup>;

export enum ETagGroup {
  SUGGESTION,
  POPULAR,
  MY_GROUP,
}

export type GroupSuggestion = TagGroup & {
  postInWeek: number;
};
export type GroupSuggestionList = Array<GroupSuggestion>;

export type GroupCategory = {
  image: string;
  name: string;
};
export type GroupCategoryList = Array<GroupCategory>;
