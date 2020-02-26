import { Component, OnInit, Input } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  constructor(private http: HttpClient) { }

  registermode = false;
  values: any ;

  ngOnInit() {
    this.getValues();
  }

  regtoggle() {
    this.registermode = !this.registermode;
  }

  getValues() {
    this.http.get('http://localhost:5000/api/DataCTX').subscribe(response => {
       this.values = response;
    }, error => {
       console.log(error);
      });
    }

    cancelRegisterMode(registermode: boolean) {
      this.registermode = registermode;
    }

}
