import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from "@angular/router";

import { TwitterRoutingModule } from './twitter-routing.module';
import { LayoutsComponent } from './layouts/layouts.component';
import { HomePageComponent } from './pages/home-page/home-page.component';
import { ExplorePageComponent } from './pages/explore-page/explore-page.component';
import { NotificationsPageComponent } from './pages/notifications-page/notifications-page.component';
import { MessagesPageComponent } from './pages/messages-page/messages-page.component';
import { ListsPageComponent } from './pages/lists-page/lists-page.component';
import { BookmarksPageComponent } from './pages/bookmarks-page/bookmarks-page.component';
import { VerifiedPageComponent } from './pages/verified-page/verified-page.component';
import { ProfilePageComponent } from './pages/profile-page/profile-page.component';
import { MorePageComponent } from './pages/more-page/more-page.component';
import { LateralMenuComponent } from './components/lateral-menu/lateral-menu.component';

@NgModule({
  declarations: [
    LayoutsComponent,
    HomePageComponent,
    ExplorePageComponent,
    NotificationsPageComponent,
    MessagesPageComponent,
    ListsPageComponent,
    BookmarksPageComponent,
    VerifiedPageComponent,
    ProfilePageComponent,
    MorePageComponent,
    LateralMenuComponent
  ],
  imports: [
    CommonModule,
    TwitterRoutingModule,
    RouterLink
  ],
  exports: [
    LayoutsComponent,
    HomePageComponent,
    ExplorePageComponent,
    NotificationsPageComponent,
    MessagesPageComponent,
    ListsPageComponent,
    BookmarksPageComponent,
    VerifiedPageComponent,
    ProfilePageComponent,
    MorePageComponent
  ]
})

export class TwitterModule { }
