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
  model: any = [];
  constructor(private evntservice: EventService) {}

  ngOnInit() {}

  evnCreate() {
    this.evntservice.eventCreate(this.model).subscribe(
      () => {
        alertify.success('Utworzono wydarzenie');
      },
      error => alertify.error('Wystąpił błąd')
    );
    console.log(this.model);
  }

  evnAbort() {
    window.location.href = '/';
  }
}
