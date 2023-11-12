import { Component, Input, OnInit } from '@angular/core';
import { ProfileUser } from "src/app/modules/message/types";

@Component({
  selector: 'app-chat-profile',
  templateUrl: './chat-profile.component.html',
  styleUrls: ['./chat-profile.component.css']
})
export class ChatProfileComponent implements OnInit {
  @Input('profile') profile: ProfileUser | null = null;
  

  constructor() {
  }

  ngOnInit(): void {
  }

}
