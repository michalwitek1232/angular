import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({ // dekorator
  providedIn: 'root'
})
export class AuthService {

baseurl = 'http://localhost/5000/api/Auth/';

constructor(private http: HttpClient) { }

login(model: any) {
  return this.http.post('http://localhost:5000/api/Auth/login', model).pipe(map((response: any) => {
    const user = response;
    if (user) {
      localStorage.setItem('token', user.token);
    }
  }));
}

register(model: any) {
  return this.http.post('http://localhost:5000/api/Auth/register', model);
}

}

