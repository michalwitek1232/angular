import { Component, OnInit } from '@angular/core';
import { logging } from 'protractor';
import { AuthService } from '../_services/auth.service';

@Component({
  selector: 'app-nav',
  templateUrl: './nav.component.html',
  styleUrls: ['./nav.component.css']
})
export class NavComponent implements OnInit {
  model: any = {};
  username: string;

  constructor(private authService: AuthService) {}

  ngOnInit() {}

  login() {
    localStorage.setItem('username', this.username);
    this.authService.login(this.model).subscribe();
  }
  loggedIn() {
    const token = localStorage.getItem('token');
    return !!token;
  }
  logout() {
    localStorage.removeItem('token');
    console.log('Zostałeś wylogowany!');
  }
}
