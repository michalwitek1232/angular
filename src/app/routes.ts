import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PubEventsComponent } from './pubEvents/pubEvents.component';
import { LikesComponent } from './likes/likes.component';
import { MessagesComponent } from './messages/messages.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EventcreatorComponent } from './eventcreator/eventcreator.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'pub_events', component: PubEventsComponent},
  { path: 'polubienia', component: LikesComponent},
  { path: 'messages', component: MessagesComponent},
  { path: 'profile', component: UserprofileComponent},
  {path: 'evn_creator', component: EventcreatorComponent},
  { path: '**', redirectTo: 'home'}
];
