import { Component, OnInit } from '@angular/core';
import { EventService } from '../_services/evncreator.service';
declare let alertify: any ;

@Component({
  selector: 'app-eventcreator',
  templateUrl: './eventcreator.component.html',
  styleUrls: ['./eventcreator.component.css']
})
  // declare let alertify;

export class EventcreatorComponent implements OnInit {
  model: any = {};
  username: string;
  constructor(private evntservice: EventService) {}

  ngOnInit() {
    this.username = localStorage.getItem('username');
  }

  evnCreate() {
    this.model.Ownerusername = this.username; // ustawienie ownera
    this.evntservice.eventCreate(this.model).subscribe(
      () => {
        alertify.success('Utworzono wydarzenie');
      },
      error => alertify.error('Wystąpił błąd')
    );
    console.log(this.model);
    window.location.replace('./moje-wyd');
  }

  evnAbort() {
    window.location.href = '/';
  }
}
