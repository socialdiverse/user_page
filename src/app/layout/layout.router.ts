import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LayoutComponent } from './layout.component';
import { AuthGuard } from '../guards/auth.guard';

const routes: Routes = [
  {
    path: '',
    component: LayoutComponent,
    children: [
      {
        path: 'feed',
        loadChildren: () =>
          import('../modules/feed/feed.module').then((m) => m.FeedModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'group',
        loadChildren: () =>
          import('../modules/group/group.module').then((m) => m.GroupModule),
        canActivate: [AuthGuard],
      },
      {
        path: '',
        redirectTo: '/feed',
        pathMatch: 'full',
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
