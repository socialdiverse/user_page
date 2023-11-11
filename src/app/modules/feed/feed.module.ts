import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedRouting } from './feed.routing';
import { PostComponent } from './post/post.component';
import { PostLoadingComponent } from 'src/app/components/post-loading/post-loading.component';
import { StoryComponent } from './story/story.component';
import { OnlineFriendComponent } from './online-friend/online-friend.component';
import { PremiumPhotosComponent } from './premium-photos/premium-photos.component';
import { FeedPeopleComponent } from './feed-people/feed-people.component';
import { TrendComponent } from './trend/trend.component';
import { ProMemberComponent } from './pro-member/pro-member.component';

@NgModule({
  declarations: [FeedComponent, PostComponent, PostLoadingComponent, StoryComponent, OnlineFriendComponent, PremiumPhotosComponent, FeedPeopleComponent, TrendComponent, ProMemberComponent],
  imports: [CommonModule, FeedRouting],
})
export class FeedModule {}
