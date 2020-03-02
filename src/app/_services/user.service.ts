import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from '../_models/user';
import { Event } from '../_models/Event';


@Injectable({
  providedIn: 'root'
})
export class UserService {
baserUrl = environment.apiUrl;
constructor(private http: HttpClient) { }

getUsers(): Observable<User[]> {
  return this.http.get<User[]>(this.baserUrl + 'users');
}
getUser(id: number): Observable<User> {
  return this.http.get<User>(this.baserUrl + 'users/' + id, );
}
getEvents(): Observable<Event[]> {
  return this.http.get<Event[]>(this.baserUrl + 'Events');
}
getEvent(id: number): Observable<Event> {
  return this.http.get<Event>(this.baserUrl + 'Events/' + id, );
}
}
