import { Component, OnInit } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  constructor(private authservice: AuthService) {}

  helper = new JwtHelperService();
  title = 'angLogin';

  ngOnInit(): void {
  const token = localStorage.getItem('token');
  if (token) {
    this.authservice.decodedToken = this.helper.decodeToken(token);
  }
  }
}
