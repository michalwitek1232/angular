import { Injectable } from '@angular/core';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AlertifyServiceService {

constructor() { }

succes(message: string) {
  alertify.sucess(message);
}
error(message: string) {
  alertify.error(message);
}
message(message: string) {
  alertify.message(message);
}


}
