import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PageRouting } from './page.routing';
import { PageComponent } from './page.component';

@NgModule({
  declarations: [PageComponent],
  imports: [CommonModule, PageRouting],
})
export class PageModule {}
