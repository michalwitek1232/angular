import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  // dekorator
  providedIn: 'root'
})
export class EventService {

  constructor(private http: HttpClient) {}

  eventCreate(model: any) {
    return this.http.post('http://localhost:5000/api/Events', model);
  }

}
