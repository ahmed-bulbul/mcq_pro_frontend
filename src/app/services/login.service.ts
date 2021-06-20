import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Subject } from 'rxjs';
import baseUrl from './helper';

@Injectable({
  providedIn: 'root',
})
export class LoginService {
  public loginStatusSubject = new Subject<boolean>();

  constructor(private http: HttpClient) {}

  //current user : which is loogedin
  public getCurrentUser() {
    return this.http.get(`${baseUrl}/currentUser`);
  }

  //generate Token
  public generateToken(loginData: any) {
    return this.http.post(`${baseUrl}/generateToken`, loginData);
  }

  //login user : set token in local storage
  public loginUser(token) {
    localStorage.setItem('token', token);
    // this.loginStatusSubject.next(true);
    return true;
  }

  //isLoogedIn: user is loggedin or not
  public isLoggedIn() {
    let tokenStr = localStorage.getItem('token');
    if (tokenStr == undefined || tokenStr == '' || tokenStr == null) {
      return false;
    } else {
      return true;
    }
  }

  //logout:: remove token from localstorage
  public logout() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    return true;
  }

  //getToken
  public getToken() {
    return localStorage.getItem('token');
  }

  //set userDetail
  public setUser(user) {
    localStorage.setItem('user', JSON.stringify(user));
  }

  //getUser
  public getUser() {
    let userStr = localStorage.getItem('user');
    if (userStr != null) {
      return JSON.parse(userStr);
    } else {
      this.logout();
      return null;
    }
  }

  //get superadmin role
  public getSuperAdminRole() {
    let superAdmin = this.getUser();

    function findSuperAdmin(roleSuperAdmin) {
      return roleSuperAdmin.authority === 'ROLE_SUPER_ADMIN';
    }
    return superAdmin.authorities.find(findSuperAdmin);
  }

  // get admin role
  public getAdminRole() {
    let admin = this.getUser();

    function findAdmin(roleAdmin) {
      return roleAdmin.authority === 'ROLE_ADMIN';
    }
    // console.warn(admin.authorities.find(findAdmin).authority);
    return admin.authorities.find(findAdmin);
  }

  //get user role
  public getUserRole() {
    let user = this.getUser();
    return user.authorities[0].authority;
  }
}
