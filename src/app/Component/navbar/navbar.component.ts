import {Component, Injectable, OnInit} from '@angular/core';
import {AuthenticationService} from '../../services/auth.service';
import {Router} from '@angular/router';
import {HomeComponent} from '../../home/home/home.component';

@Component({
  selector: 'app-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class NavbarComponent implements OnInit {
  // @ts-ignore
  showMe: boolean;
  // @ts-ignore
  showMe2: boolean;
  // @ts-ignore
  showMeProfil: boolean;
  // @ts-ignore
  showAllUsers: boolean;
  // @ts-ignore
  showOneUsers: boolean;
  constructor(
    private authenticationService: AuthenticationService,
    private router: Router,
    private homeComponent: HomeComponent
  ) { }

  ngOnInit(): void {
    this.showMefunction();
    this.showMe2function();
    this.showMeProfilfunction();
    this.showAllUsersFunction();
    this.showOneUsersFunction();
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  showMefunction(){
    console.log(this.showMe);
    this.showMe = !this.showMe;
  }
  // tslint:disable-next-line:typedef
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
// @ts-ignore
  // tslint:disable-next-line:typedef
  showMe2function(){
    console.log('ca marche');
    this.homeComponent.showMe2 = !this.homeComponent.showMe2;
  }
// @ts-ignore
  // tslint:disable-next-line:typedef
  showMeProfilfunction(){
    this.showMeProfil = !this.showMeProfil;
  }
  // tslint:disable-next-line:typedef
  showAllUsersFunction(){
    this.showAllUsers = !this.showAllUsers;
  }
  // tslint:disable-next-line:typedef
  showOneUsersFunction(){
    this.showOneUsers = !this.showOneUsers;
  }
}
