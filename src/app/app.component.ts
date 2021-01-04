import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { AuthenticationService } from './services/auth.service';
import { User } from './Models/user.model' ;
@Component({
  selector: 'app-root', templateUrl: 'app.component.html' })
export class AppComponent {
  // @ts-ignore
  currentUser: User;
  login=false;
  constructor(
    private  route:ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService
  ) {
    this.authenticationService.currentUser.subscribe(x => this.currentUser = x);
  }
  ngOnInit(){
    
    if (window.location.href.includes('login')) {
      this.login = true;
    }
  }

}
