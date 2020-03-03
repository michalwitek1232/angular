import { Component, OnInit } from '@angular/core';
import { User } from 'src/app/_models/user';
import {Event} from 'src/app/_models/Event';
import { UserService } from 'src/app/_services/user.service';
import { AlertifyServiceService } from 'src/app/_services/Alertify-service.service';
import { fromEventPattern } from 'rxjs';
declare let alertify: any;


@Component({
  selector: 'app-moje-wyd',
  templateUrl: './moje-wyd.component.html',
  styleUrls: ['./moje-wyd.component.css']
})
export class MojeWydComponent implements OnInit {

  myevents: Event[];

  constructor(private userservice: UserService) { }

  ngOnInit() {
    this.loadCustomEvents();
  }

  loadCustomEvents() {
    this.userservice.getCustomEvents(localStorage.getItem('username')).subscribe((events: Event[]) => {
      this.myevents = events;
    }, error => {alertify.error(error);
    });
  }

  deleteEvent(id: number) {
    this.userservice.delEvent(id);
    console.log('Usunięto Event o ID' + id.toString());
  }
  rel()
  {
    location.reload();
  }
}
