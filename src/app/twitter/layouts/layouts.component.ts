import { Component } from '@angular/core';

@Component({
  selector: 'twitter-layout',
  templateUrl: './layouts.component.html',
  styleUrls: ['./layouts.component.css']
})

export class LayoutsComponent {

  constructor() {}

  public menuItems = [
    { icon: 'home', name: 'Home', route: 'home' },
    { icon: 'explore', name: 'Explore', route: 'explore' },
    { icon: 'notifications', name: 'Notifications', route: 'notifications' },
    { icon: 'messages', name: 'Messages', route: 'messages' },
    { icon: 'lists', name: 'Lists', route: 'lists' },
    { icon: 'bookmarks', name: 'Bookmarks', route: 'bookmarks' },
    { icon: 'verified', name: 'Verified', route: 'verified' },
    { icon: 'profile', name: 'Profile', route: 'profile' },
    { icon: 'more', name: 'More', route: 'more' },
  ]

}
