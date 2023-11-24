import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedRouting } from './feed.routing';
import { PostListComponent } from './post-list/post-list.component';
import { PostLoadingComponent } from 'src/app/components/post-loading/post-loading.component';
import { StoryComponent } from './story/story.component';
import { FeedFriendComponent } from './feed-friend/feed-friend.component';
import { PremiumPhotosComponent } from './premium-photos/premium-photos.component';
import { FeedPeopleComponent } from './feed-people/feed-people.component';
import { TrendComponent } from './trend/trend.component';
import { ProMemberComponent } from './pro-member/pro-member.component';
import { CommentComponent } from 'src/app/components/comment/comment.component';
import { ChatBoxComponent } from 'src/app/components/chatbox/chatbox.component';
import { IconComponent } from 'src/app/components/icon/icon.component';
import { PostPreviewComponent } from './post-list/post-preview/post-preview.component';
import { CreateHistoryBoxComponent } from './post-list/create-history-box/create-history-box.component';
import { CreatePostBoxComponent } from './post-list/create-post-box/create-post-box.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FeedComponent,
    PostListComponent,
    PostLoadingComponent,
    StoryComponent,
    FeedFriendComponent,
    PremiumPhotosComponent,
    FeedPeopleComponent,
    TrendComponent,
    ProMemberComponent,
    CommentComponent,
    IconComponent,
    ChatBoxComponent,
    CreatePostBoxComponent,
    CreateHistoryBoxComponent,
    PostPreviewComponent,
  ],
  imports: [CommonModule, FeedRouting, FormsModule, ReactiveFormsModule],
})
export class FeedModule {}
