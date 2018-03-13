import { Component, OnInit } from '@angular/core';

import { Friend } from "./friend.model";

import { FriendsService } from "./friends.service";

@Component({
  selector: 'app-friend',
  templateUrl: './friend.component.html',
  styleUrls: ['./friend.component.css'],
  providers: [FriendsService]
})
export class FriendComponent implements OnInit {

  // friendList: Friend[] = [
  //   new Friend('Peter Ho', 'pete@gmail.com', '6543456')
  // ];
  friendList: Friend[] = [];

  constructor(private friendsService: FriendsService) { }

  ngOnInit() {
    this.friendList = this.friendsService.getFriends();
    this.friendsService.friendAdded.subscribe(() => {this.friendList = this.friendsService.getFriends()});
  }

  onFriendAdded(newFriendInfo) {
    // console.log(newFriendInfo);
    this.friendList.push(newFriendInfo);
    // console.log(this.friendList);
  }

}
