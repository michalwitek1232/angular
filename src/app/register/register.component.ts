import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { AuthService } from '../_services/auth.service';
declare let alertify: any ;

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  @Input() valuesFromHome: any;
  @Output() cancelReg = new EventEmitter();
  model: any = {};

  constructor(private authserv: AuthService) {}

  ngOnInit() {}

  register() {
    this.authserv.register(this.model).subscribe(
      () => {
        alertify.success('Rejestracja udana');
      },
      error => alertify.error('Wystąpił błąd rejestracji')
    );
    console.log(this.model);
  }

  registerAbort() {
    this.cancelReg.emit(false);
  }

  titleCase(str) {
    str = str.toLowerCase().split(' ');
    for (let i = 0; i < str.length; i++) {
      str[i] = str[i].charAt(0).toUpperCase() + str[i].slice(1);
    }
    return str.join(' ');
  }

  userSave() {
    let name: string = this.authserv.decodedToken?.unique_name;
    name = this.titleCase(name);
    localStorage.setItem('username', name);
  }

btnDeb()
  {
  console.log('Alive!');
  }

}
