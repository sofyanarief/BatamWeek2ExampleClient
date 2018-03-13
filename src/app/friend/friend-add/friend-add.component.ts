import { Component, OnInit, EventEmitter, Output} from '@angular/core';
import { Friend } from "../friend.model";

@Component({
  selector: 'app-friend-add',
  templateUrl: './friend-add.component.html',
  styleUrls: ['./friend-add.component.css']
})
export class FriendAddComponent implements OnInit {
  inputInfo : Friend = new Friend("", "", "");
  constructor() { }

  @Output() friendAdded = new EventEmitter<Friend>();

  ngOnInit() {
  }

  onAddFriend(){
    // console.log("Add Friend");
    // console.log(this.inputInfo);
    this.friendAdded.emit(this.inputInfo);
  }

}
