import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LayoutsComponent } from "./layouts/layouts.component";
import { HomePageComponent } from "./pages/home-page/home-page.component";
import { ExplorePageComponent } from "./pages/explore-page/explore-page.component";
import { NotificationsPageComponent } from "./pages/notifications-page/notifications-page.component";
import { MessagesPageComponent } from "./pages/messages-page/messages-page.component";
import { ListsPageComponent } from "./pages/lists-page/lists-page.component";
import { BookmarksPageComponent } from "./pages/bookmarks-page/bookmarks-page.component";
import { VerifiedPageComponent } from "./pages/verified-page/verified-page.component";
import { ProfilePageComponent } from "./pages/profile-page/profile-page.component";
import { MorePageComponent } from "./pages/more-page/more-page.component";

const routes: Routes = [
  {
    path: '',
    component: LayoutsComponent,
    children: [
      { path: 'home', component: HomePageComponent },
      { path: 'explore', component: ExplorePageComponent },
      { path: 'notifications', component: NotificationsPageComponent },
      { path: 'messages', component: MessagesPageComponent },
      { path: 'lists', component: ListsPageComponent },
      { path: 'bookmarks', component: BookmarksPageComponent },
      { path: 'verified', component: VerifiedPageComponent },
      { path: 'profile', component: ProfilePageComponent },
      { path: 'more', component: MorePageComponent },
      { path: '**', redirectTo: 'home' },
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class TwitterRoutingModule {
}
