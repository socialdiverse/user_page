import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FeedComponent } from './feed.component';
import { FeedRouting } from './feed.routing';

@NgModule({
  declarations: [FeedComponent],
  imports: [CommonModule, FeedRouting],
})
export class FeedModule {}
