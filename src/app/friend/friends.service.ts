import { EventEmitter, Injectable } from '@angular/core';
import { Friend } from "./friend.model";

import { Http, Response, Headers } from "@angular/http";
import 'rxjs/Rx';

@Injectable()
export class FriendsService {
  friendAdded = new EventEmitter<void>();

  private friendList: Friend[] = [];

  constructor(private http: Http) { }

  loadFriends() {
    return this.http.get("/api/friends")
      .map((response: Response) => {
        const data = response.json();
        this.friendList = data;
        return data;
      },
      (error) => console.log(error)
    );
  }

  addFriend(newFriendInfo) {
    // this.friendList.push(newFriendInfo);
    // this.friendAdded.emit();
    const headers = new Headers({'Content-Type': 'application/json'});

    this.http.post("/api/friends",
        {info: newFriendInfo},
        {headers: headers})
      .subscribe((response: Response) => {
        const data = response.json();
        this.friendList.push(data);
        this.friendAdded.emit();
      },
      (error) => console.log(error)
    )
  }

  getFriends() {
    return this.friendList.slice();
  }

}
