import { EventEmitter, Injectable } from '@angular/core';
import { Friend } from "./friend.model";

@Injectable()
export class FriendsService {
  friendAdded = new EventEmitter<void>();

  private friendList: Friend[] = [
    new Friend('Peter Ho', 'pete@gmail.com', '6543456')
  ];

  constructor() { }

  addFriend(newFriendInfo) {
    this.friendList.push(newFriendInfo);
    this.friendAdded.emit();
  }

  getFriends() {
    return this.friendList.slice();
  }

}
