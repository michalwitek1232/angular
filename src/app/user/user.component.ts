// tslint:disable: quotemark
import { Component, OnInit } from "@angular/core";
import { HttpClientModule } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable()
export class ConfigService {
  constructor(private http: HttpClient) { }
}

@Component({

  selector: "app-user",
  templateUrl: "./user.component.html",
  styleUrls: ["./user.component.css"]
})
export class UserComponent implements OnInit {
  values: any;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.getValues();
    console.log();
  }

  getValues() {
    this.http.get('http://localhost:5000/api/DataCTX').subscribe(response => {
       this.values = response;
    }, error => {
       console.log(error);
      });
    }

    // przypisanie wartości do values, wypisywanie błędu

}
