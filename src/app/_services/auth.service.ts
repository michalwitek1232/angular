import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({
  // dekorator
  providedIn: 'root'
})
export class AuthService {

  helper = new JwtHelperService();
  decodedToken: any;


  constructor(private http: HttpClient) {}

  login(model: any) {
    return this.http.post('http://localhost:5000/api/Auth/login', model).pipe(
      map((response: any) => {
        const user = response;
        if (user) {
          localStorage.setItem('token', user.token);
          this.decodedToken = this.helper.decodeToken(user.token);
          console.log(this.decodedToken);
        }
      })
    );
  }

  register(model: any) {
    return this.http.post('http://localhost:5000/api/Auth/register', model);
  }

  loggedIn() {
    const token = localStorage.getItem('token');
    return !this.helper.isTokenExpired(token);
  }
}
