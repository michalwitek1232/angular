import { Routes } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { PubEventsComponent } from './pubEvents/pubEvents.component';
import { LikesComponent } from './likes/likes.component';
import { MessagesComponent } from './messages/messages.component';
import { UserprofileComponent } from './userprofile/userprofile.component';
import { EventcreatorComponent } from './eventcreator/eventcreator.component';
import { AuthGuard } from './guards/auth.guard';
import { MojeWydComponent } from './moje-wyd/moje-wyd.component';

export const appRoutes: Routes = [
  { path: 'home', component: HomeComponent},
  { path: 'pub_events', component: PubEventsComponent},
  { path: 'polubienia', component: LikesComponent, canActivate: [AuthGuard]},
  { path: 'messages', component: MessagesComponent, canActivate: [AuthGuard]},
  { path: 'profile', component: UserprofileComponent, canActivate: [AuthGuard]},
  {path: 'evn_creator', component: EventcreatorComponent, canActivate: [AuthGuard]},
  {path: 'moje-wyd', component: MojeWydComponent, canActivate: [AuthGuard]},
  { path: '**', redirectTo: 'home'}
];
