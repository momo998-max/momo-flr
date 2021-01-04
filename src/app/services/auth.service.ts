import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { BehaviorSubject, Observable } from 'rxjs';
import { map } from 'rxjs/operators';

import { environment } from 'src/environments/environment';
import {User} from '../Models/user.model';
import {JwtHelperService} from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {
  private API_URL = environment.apiUrl;
  private currentUserSubject: BehaviorSubject < User > ;
  private helper = new JwtHelperService();
  public currentUser: Observable < User > ;
  constructor( private http: HttpClient ) {
    this.currentUserSubject = new
    BehaviorSubject < User >(JSON.parse ( localStorage.getItem('currentUser') as string)) ;
    this.currentUser = this.currentUserSubject.asObservable () ;
  }
  public get currentUserValue(): User {
    return this.currentUserSubject.value;
  }
// tslint:disable-next-line:typedef
  login(username: string, password: string) {
    return this.http.post < any >( `${ this.API_URL }/login`, { username,
      password })
      .pipe ( map (user => {
// store user details and jwt token in local storage to keep user
        // logged in between page refreshes
        localStorage.setItem ( 'currentUser', JSON.stringify (user)) ;
        this.currentUserSubject.next (user) ;
        return user;
      })) ;
  }
// tslint:disable-next-line:typedef
  logout() {
// remove user from local storage and set current user to null
    localStorage.removeItem ( 'currentUser' ) ;
    // @ts-ignore
    this.currentUserSubject.next ( null ) ;
  }
}
