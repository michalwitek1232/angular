import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { logging } from 'protractor';
import { AuthService } from '../_services/auth.service';
import { JwtHelperService } from '@auth0/angular-jwt';
declare let alertify: any;

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  username: string;

  @Output() enet = new EventEmitter();

  constructor(public authService: AuthService) {}

  ngOnInit() {}

  login() {
    this.authService.login(this.model).subscribe(next => {
      alertify.success('Zalogowałeś sie do aplikacji');
    }, error => {
      alertify.error('Wystąpił błąd logowania!');
    });
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return this.authService.loggedIn();
  }
  logout() {
    localStorage.removeItem('token');
    alertify.message('Zostałeś wylogowany!');
  }

  enetLogged() {
    this.enet.emit(false);
  }
}
