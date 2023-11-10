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
        path: 'message',
        loadChildren: () =>
          import('../modules/message/message.module').then(
            (m) => m.MessageModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'blog',
        loadChildren: () =>
          import('../modules/blog/blog.module').then((m) => m.BlogModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'setting',
        loadChildren: () =>
          import('../modules/user-setting/user-setting.module').then(
            (m) => m.UserSettingModule
          ),
        canActivate: [AuthGuard],
      },
      {
        path: 'event',
        loadChildren: () =>
          import('../modules/event/event.module').then((m) => m.EventModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'market',
        loadChildren: () =>
          import('../modules/market/market.module').then((m) => m.MarketModule),
        canActivate: [AuthGuard],
      },
      {
        path: 'page',
        loadChildren: () =>
          import('../modules/page/page.module').then((m) => m.PageModule),
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
