import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent {
  menus: any = [
    {
      page: 'feed',
      image: 'home.png',
      title: 'Bảng tin',
      isActive: true,
    },
    {
      page: 'message',
      image: 'message.png',
      title: 'Tin nhắn',
      isActive: false,
    },
    {
      page: 'event',
      image: 'event.png',
      title: 'Sự kiện',
      isActive: false,
    },
    {
      page: 'page',
      image: 'page.png',
      title: 'Trang',
      isActive: false,
    },
    {
      page: 'group',
      image: 'group.png',
      title: 'Nhóm',
      isActive: false,
    },
    {
      page: 'market',
      image: 'market.png',
      title: 'Chợ',
      isActive: false,
    },
    {
      page: 'blog',
      image: 'blog.png',
      title: 'Blog',
      isActive: false,
    },
  ];
  constructor(private router: Router) {}
  redirect(page: string) {
    this.router.navigate([page]);
    this.menus.map((item: any) => {
      item.isActive = page == item.page;
      return item;
    });
  }
}
