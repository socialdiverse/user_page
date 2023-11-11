import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedRouting } from './feed.routing';
import { PostListComponent } from './post-list/post-list.component';
import { PostLoadingComponent } from 'src/app/components/post-loading/post-loading.component';
import { StoryComponent } from './story/story.component';
import { OnlineFriendComponent } from './online-friend/online-friend.component';
import { PremiumPhotosComponent } from './premium-photos/premium-photos.component';
import { FeedPeopleComponent } from './feed-people/feed-people.component';
import { TrendComponent } from './trend/trend.component';
import { ProMemberComponent } from './pro-member/pro-member.component';
import { PostTypeImageComponent } from './post-list/post-types/post-type-image/post-type-image.component';
import { PostTextComponent } from './post-list/post-types/post-text/post-text.component';
import { PostImagesComponent } from './post-list/post-types/post-images/post-images.component';
import { CommentComponent } from 'src/app/components/comment/comment.component';
import { ChatBoxComponent } from 'src/app/components/chatbox/chatbox.component';
import { IconComponent } from 'src/app/components/icon/icon.component';

@NgModule({
  declarations: [
    FeedComponent,
    PostListComponent,
    PostLoadingComponent,
    StoryComponent,
    OnlineFriendComponent,
    PremiumPhotosComponent,
    FeedPeopleComponent,
    TrendComponent,
    ProMemberComponent,
    PostTypeImageComponent,
    PostTextComponent,
    PostImagesComponent,
    CommentComponent,
    IconComponent,
    ChatBoxComponent,
  ],
  imports: [CommonModule, FeedRouting],
})
export class FeedModule {}
