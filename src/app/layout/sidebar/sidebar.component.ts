import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { menuItems } from './menu-items';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
})
export class SidebarComponent implements OnInit {
  menus = menuItems;
  constructor(private router: Router) {}
  ngOnInit(): void {}

  redirect(page: string) {
    this.router.navigate([page]);
    this.menus.map((item: any) => {
      item.isActive = page == item.page;
      return item;
    });
  }
}
