// import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Component, OnInit } from '@angular/core';
import { Friend } from "../friend.model";
import { FriendsService } from "../friends.service";

@Component({
  selector: 'app-friend-add',
  templateUrl: './friend-add.component.html',
  styleUrls: ['./friend-add.component.css']
})
export class FriendAddComponent implements OnInit {
  // inputInfo : Friend = new Friend("", "", "");

  // @Output() friendAdded = new EventEmitter<Friend>();
  constructor(private friendsService: FriendsService) { }

  ngOnInit() {
  }

  onAddFriend(inputName: HTMLInputElement, inputEmail: HTMLInputElement, inputContact: HTMLInputElement){
    // console.log("Add Friend");
    // console.log(this.inputInfo);
    // this.friendAdded.emit(this.inputInfo);
    this.friendsService.addFriend(new Friend(inputName.value,inputEmail.value,inputContact.value));
  }

}
