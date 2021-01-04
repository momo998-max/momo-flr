import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {BehaviorSubject, Observable, Subject} from 'rxjs';
import { map } from 'rxjs/operators';
import {User} from '../Models/user.model';
import { environment } from 'src/environments/environment';
import {NavigationStart, Router} from '@angular/router';
@Injectable({
  providedIn: 'root'
})
export class AlertService {
  private API_URL = environment.apiUrl;
  // @ts-ignore
  private currentUserSubject: BehaviorSubject<User>;
  // @ts-ignore
  public currentUser: Observable<User>;
  private subject = new Subject<any>();
  private keepAfterRouteChange = false;

  constructor(private router: Router) {
    // clear alert messages on route change unless 'keepAfterRouteChange' flag is true
    this.router.events.subscribe(event => {
      if (event instanceof NavigationStart) {
        if (this.keepAfterRouteChange) {
          // only keep for a single route change
          this.keepAfterRouteChange = false;
        } else {
          // clear alert message
          this.clear();
        }
      }
    });
  }

  getAlert(): Observable<any> {
    return this.subject.asObservable();
  }

  // tslint:disable-next-line:typedef
  success(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'success', text: message });
  }

  // tslint:disable-next-line:typedef
  error(message: string, keepAfterRouteChange = false) {
    this.keepAfterRouteChange = keepAfterRouteChange;
    this.subject.next({ type: 'error', text: message });
  }

  // tslint:disable-next-line:typedef
  clear() {
    // clear by calling subject.next() without parameters
    this.subject.next();
  }
}
