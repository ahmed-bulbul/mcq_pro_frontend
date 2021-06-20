import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, UrlTree, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginService } from './login.service';

@Injectable({
  providedIn: 'root'
})
export class AdminGuard implements CanActivate {

  constructor(private login:LoginService,private router:Router){}
  canActivate(
    route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): Observable<boolean | UrlTree> | Promise<boolean | UrlTree> | boolean | UrlTree {

      if(this.login.isLoggedIn() && (this.login.getSuperAdminRole().authority=='ROLE_SUPER_ADMIN' || 
      this.login.getAdminRole().authority=='ROLE_ADMIN') ){

        return true;
      }
      
    this.router.navigate(['login']);
    return false;
  }
  
}
