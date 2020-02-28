import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyServiceService } from 'src/app/_services/Alertify-service.service';
declare let alertify: any;

@Component({
  selector: 'app-user-list',
  templateUrl: './user-list.component.html',
  styleUrls: ['./user-list.component.css']
})
export class UserListComponent implements OnInit {

  users: User[];

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.loadUsers();
  }

  loadUsers() {
    this.userservice.getUsers().subscribe((users: User[]) => {
      this.users = users;
    }, error => {alertify.error(error);
    });
  }

}
