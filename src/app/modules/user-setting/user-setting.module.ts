import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { UserSettingComponent } from './user-setting.component';
import { UserSettingRouting } from './user-setting.routing';

@NgModule({
  declarations: [UserSettingComponent],
  imports: [CommonModule, UserSettingRouting],
})
export class UserSettingModule {}
