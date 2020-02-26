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
}
