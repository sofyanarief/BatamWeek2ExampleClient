import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";


import { AppComponent } from './app.component';
import { FriendComponent } from './friend/friend.component';
import { FriendAddComponent } from './friend/friend-add/friend-add.component';
import { FriendListComponent } from './friend/friend-list/friend-list.component';
import { HoverHighlightDirective } from './hover-highlight.directive';
import { AppRoutingModule } from './/app-routing.module';
import { ContactUsComponent } from './contact-us/contact-us.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { FriendsService } from './friend/friends.service';
import { FindPipe } from './find.pipe';


@NgModule({
  declarations: [
    AppComponent,
    FriendComponent,
    FriendAddComponent,
    FriendListComponent,
    HoverHighlightDirective,
    ContactUsComponent,
    HeaderComponent,
    HomeComponent,
    PageNotFoundComponent,
    FindPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    ReactiveFormsModule
  ],
  providers: [FriendsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
