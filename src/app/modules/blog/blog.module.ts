import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BlogComponent } from './blog.component';
import { BlogRouting } from './blog.routing';

@NgModule({
  declarations: [BlogComponent],
  imports: [CommonModule, BlogRouting],
})
export class BlogModule {}
