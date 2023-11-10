import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { GroupComponent } from './group.component';

const routes: Routes = [
  {
    path: '',
    component: GroupComponent,
    children: [
      {
        path: '',
        redirectTo: 'group',
        pathMatch: 'full',
      },
      {
        path: 'group',
        component: GroupComponent,
        data: { returnUrl: window.location.pathname },
      },
      { path: '', redirectTo: 'group', pathMatch: 'full' },
      { path: '**', redirectTo: 'group', pathMatch: 'full' },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GroupRouting {}
