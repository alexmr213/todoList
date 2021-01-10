import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { ServiceLoginService } from '../services/service-login.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {
constructor( private service: ServiceLoginService, private router: Router){}
  canActivate(): boolean {
    if(this.service.status()){
      return true;
    } else {
      this.router.navigateByUrl('/login');
    }
  }
  
}
