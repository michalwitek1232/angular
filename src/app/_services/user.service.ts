import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable, from } from 'rxjs';
import { User } from '../_models/user';
import { Event } from '../_models/Event';
declare let alertify: any;

const headers = new HttpHeaders({Authorization: 'Bearer ' + localStorage.getItem('token')});

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
getCustomEvents(name: string): Observable<Event[]> {
  return this.http.get<Event[]>(this.baserUrl + 'Events/userEvent/'+ name);
}
getEvent(id: number): Observable<Event> {
  return this.http.get<Event>(this.baserUrl + 'Events/' + id, );
}
delEvent(id: number) {
  this.http.delete(this.baserUrl + 'Events/' + id, {headers: headers}).subscribe(next => {
    alertify.success('Pomyślnie usunięto');
  }, error => {
    alertify.error('Wystąpił błąd usuwania!');
    console.log(error);
  });
}
}
