import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import {Event} from 'src/app/_models/Event';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyServiceService } from 'src/app/_services/Alertify-service.service';
import { fromEventPattern } from 'rxjs';
declare let alertify: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];
  events: Event[];

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.loadUsers();
    this.loadEvents();
  }

  loadEvents() {
    this.userservice.getEvents().subscribe((events: Event[]) => {
      this.events = events;
    }, error => {alertify.error(error);
    });
  }

  loadUsers() {
    this.userservice.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {alertify.error(error);
    });
  }

  GetOwner(date1: any, date2: any) {
    let out = this.calc(date1, date2);
    alertify.message('Zostało:  ' + out.toString() +' dni');
    console.log();
  }

  calc(date1: any, date2: any) {
    const diff = Math.abs(date1 - date2);
    const diffDays = Math.ceil(diff / (1000 * 3600 * 24));
    return diffDays;
  }


}
