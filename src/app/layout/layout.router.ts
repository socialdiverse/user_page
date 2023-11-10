import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: '',
        loadChildren: () =>
          import('../modules/feed/feed.module').then((m) => m.FeedModule),
        // canActivate: [RoleGuard],
      },
      {
        path: 'group',
        loadChildren: () =>
          import('../modules/group/group.module').then((m) => m.GroupModule),
        // canActivate: [RoleGuard],
      },
      {
        path: '**',
        redirectTo: 'error/404',
      },
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LayoutRouting {}
