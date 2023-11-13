import { NgModule } from '@angular/core';
import { CommonModule, NgOptimizedImage } from '@angular/common';
import { GroupComponent } from './group.component';
import { GroupRouting } from './group.routing';
import { TagGroupComponent } from './tag-group/tag-group.component';
import { GroupCategoriesComponent } from './group-categories/group-categories.component';
import { GroupSuggestComponent } from './group-suggest/group-suggest.component';
import { ChevronLeft, ChevronRight, LucideAngularModule, PlusCircle } from "lucide-angular";

@NgModule({
  declarations: [GroupComponent, TagGroupComponent, GroupCategoriesComponent, GroupSuggestComponent],
  imports: [CommonModule, GroupRouting, NgOptimizedImage, LucideAngularModule.pick({
    ChevronLeft,
    ChevronRight,
    PlusCircle
  })],
})
export class GroupModule {
}
