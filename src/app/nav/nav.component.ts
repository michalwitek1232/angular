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
  @Output() enet2 = new EventEmitter();


  constructor(public authService: AuthService) {}

  ngOnInit() { this.userSave(); }

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

  titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (var i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }

  userSave()
  {
    let name: string = this.authService.decodedToken?.unique_name;
    name = this.titleCase(name);
    localStorage.setItem('username', name)
  }
}
