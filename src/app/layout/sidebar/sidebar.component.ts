import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css'],
})
export class SidebarComponent implements OnInit {
  @Output() pageRedirect: EventEmitter<string> = new EventEmitter<string>();
  ngOnInit(): void {} 
  redirect(page: string) {
    console.log(page);
    this.pageRedirect.emit(page);
  }
}
