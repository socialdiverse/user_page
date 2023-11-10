import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { GroupComponent } from './group.component';
import { GroupRouting } from './group.routing';

@NgModule({
  declarations: [GroupComponent],
  imports: [CommonModule, GroupRouting],
})
export class GroupModule {}
