import {Component, Injectable, OnInit} from '@angular/core';
import {first, map, pluck} from 'rxjs/operators';
import {User} from '../../Models/user.model';
import { AuthenticationService } from '../../services/auth.service';
import { UserService} from '../../services/user.service';
import {ActivatedRoute, Router} from '@angular/router';
import {UserComponent} from '../../Component/user/user.component';
import {FormBuilder, FormGroup} from '@angular/forms';
import {Profil} from '../../Models/profil.model';
import {NavbarComponent} from '../../Component/navbar/navbar.component';
import {ProlfilDeSortieService} from '../../services/prolfil-de-sortie.service';
import {ProfilDeSortie} from '../../Models/ProfilSortie.model';
import {ProlfilService} from '../../services/prolfil.service';
@Component({selector: 'app-homm', templateUrl: 'home.component.html' })
@Injectable({
  providedIn: 'root'
})
export class HomeComponent implements OnInit {
  currentUser: User;
  users: User[] = [] ;
  profilSorties: ProfilDeSortie[] = [] ;
  displayedColumns = ['prenom', 'nom', 'email', 'show'];
  displayedColumns2 = ['libelle', 'Actions'];
  dataSource: any;
  dataSource2: any;
  // @ts-ignore
  userr: User =
    {
      username: '',
      password: '',
      token: '',
      prenom: '',
      Nom: '',
      Email: '',
      Telephone: '',
      genre: '',
      profil: '',
      // @ts-ignore
      statut: '',
      avatar: '',
      archivage: false
    };
  UserProfil: any;
  // @ts-ignore
  profils: Profil[] = [] ;
  opened = false;
  // @ts-ignore
  loginForm: FormGroup;
  loading = false;
  submitted = false;
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
  // @ts-ignore
  private createUser: boolean;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private router: Router,
    private Usercomponent: UserComponent,
    private SortieProfil: ProlfilDeSortieService,
    private profilService: ProlfilService,
  ) {
    this.currentUser =
      this.authenticationService.currentUserValue;
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loadUserProfil(1) ;
    this.loadAllSortieProfil() ;
    this.loadAllUsers();
    this.loadAllprof();
    this.showMefunction();
    this.showMeProfilfunction();
    this.showAllUsersFunction();
    this.showOneUsersFunction();
    this.createUserFunction();
  }
  // tslint:disable-next-line:typedef
  loadAllprof() {
    // @ts-ignore
    // @ts-ignore
    this.userService.getAllProf()
      .pipe(map(x => JSON.stringify(x)),
        map(x => JSON.parse(x)),
        pluck('hydra:member'))
      .subscribe(profils => this.profils = profils);
    return this.profils;
  }
  // tslint:disable-next-line:typedef
  loadAllUsers() {
    // @ts-ignore
    this.userService.getAll()
      .pipe(map(x => JSON.stringify(x)),
        map(x => JSON.parse(x)),
        pluck('hydra:member'))
      .subscribe(
        users =>  {
          this.users = users;
          this.dataSource = this.users;
        }
      );
  }
  // tslint:disable-next-line:typedef
  loadAllSortieProfil() {
    // @ts-ignore
    this.SortieProfil.getAllSortieProfils()
      .pipe(map(x => JSON.stringify(x)),
        map(x => JSON.parse(x)),
        pluck('hydra:member'))
      .subscribe(
        profilSorties =>  {
          this.profilSorties = profilSorties;
          this.dataSource2 = this.profilSorties;
        }
      );
  }
  // tslint:disable-next-line:typedef
  logout() {
    this.authenticationService.logout();
    this.router.navigate(['/login']);
  }
  // @ts-ignore
  // tslint:disable-next-line:typedef
  showMefunction(){
    this.showMe = !this.showMe;
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
  // tslint:disable-next-line:typedef
  createUserFunction(){
    this.createUser = false;
    this.createUser = !this.createUser;
  }
// tslint:disable-next-line:typedef
  deleteUser(id: any) {
    this.userService.delete(id)
      .subscribe((data) => this.loadAllUsers());
  }
  // tslint:disable-next-line:typedef
   loadOneUser(id: any) {
    this.showOneUsers = true;
    // @ts-ignore
    this.showOneUsersFunction();
    this.userService.getOneUser(id)
      .pipe(first())
      .subscribe(userr => {this.userr = userr ; console.log(userr); });
    return this.userr;
  }
  // tslint:disable-next-line:typedef
  loadUserProfil(id: any) {
    this.profilService.getAllProfilsUsers(id)
      .pipe(map(x => JSON.stringify(x)),
        map(x => JSON.parse(x)),
        pluck('hydra:member'))
      .subscribe(UserProfil => {this.UserProfil = UserProfil ; console.log(UserProfil); });
    return this.UserProfil;
  }
}
