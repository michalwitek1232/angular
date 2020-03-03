import { Injectable } from '@angular/core';
import {
  CanActivate,
  ActivatedRouteSnapshot,
  RouterStateSnapshot,
  UrlTree,
  Router
} from '@angular/router';
import { Observable } from 'rxjs';
import { AuthService } from '../_services/auth.service';
declare let alertify: any;

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
  constructor(private authservice: AuthService, private router: Router) {}

  canActivate(): boolean {
    if (this.authservice.loggedIn()) {
      return true;
    } else {
      alertify.error('Brak uprawnień');
      this.router.navigate(['/home']);
      return false;
    }
  }
}
