import { Component, OnInit } from '@angular/core';

import { Friend } from "./friend.model";

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css']
})
export class FriendComponent implements OnInit {

  friendList: Friend[] = [
    new Friend('Peter Ho', 'pete@gmail.com', '6543456')
  ];

  constructor() { }

  ngOnInit() {
  }

  onFriendAdded(newFriendInfo) {
    // console.log(newFriendInfo);
    this.friendList.push(newFriendInfo);
    // console.log(this.friendList);
  }

}
