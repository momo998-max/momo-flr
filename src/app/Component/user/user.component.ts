import {Component, Injectable, OnInit} from '@angular/core';
import {first, map, pluck} from 'rxjs/operators';
import {User} from '../../Models/user.model';
import {AuthenticationService} from '../../services/auth.service';
import {UserService} from '../../services/user.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {Profil} from '../../Models/profil.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../../environments/environment';

@Component({
  selector: 'app-user',
  templateUrl: './user.component.html',
  styleUrls: ['./user.component.scss']
})
@Injectable({
  providedIn: 'root'
})
export class UserComponent implements OnInit {
  private API_URL2 = environment.apiUrl2;
  currentUser: User;
  // @ts-ignore
  users: User[] = [] ;
  profils: Profil[] ;
  user: User =
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
  // @ts-ignore
  loginForm2: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
    private authenticationService: AuthenticationService,
    private userService: UserService,
    private http: HttpClient,
  ) {
    this.currentUser =
      this.authenticationService.currentUserValue;
    this.profils = this.loadAllprof();
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
  get f() { return this.loginForm2.controls; }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loginForm2 = this.formBuilder.group ({
      username: ['', Validators.required],
      password: ['', Validators.required],
      prenom: ['', Validators.required],
      nom: ['', Validators.required],
      email: ['', Validators.required],
      telephone: ['', Validators.required],
      genre: ['', Validators.required],
      statut: ['', Validators.required],
      profil: [''],
      avatar: [''],
    });
  }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
    alert('cik');
// reset alerts on submit
    // @ts-ignore
    // this.alertService.clear();
    // stop here if form is invalid
    if (this.loginForm2.invalid ) {
      alert('invaluf');
      return;
    }
    alert('valid');
    this.loading = true;
    this.loadAllprof();
    // console.log(this.use),
    console.log(this.loginForm2.value);
    this.userService.addUser(this.loginForm2.value)
      .subscribe(
        user => {
          alert('ok');
        });
  }
  // tslint:disable-next-line:typedef
  deleteUser(id: number) {
    this.userService.delete(id)
      .pipe(first())
      .subscribe(() => this.loadAllUsers());
  }
  // tslint:disable-next-line:typedef
  loadAllUsers() {
    // @ts-ignore
    this.userService.getAll()
      .pipe(map(x => JSON.stringify(x)),
        map(x => JSON.parse(x)),
        pluck('hydra:member'))
      .subscribe(users =>  this.users = users);
    return this.users;
  }
  // tslint:disable-next-line:typedef
  loadOneUser(id: number) {
    // @ts-ignore
    this.userService.getOneUser()
      .pipe(first())
      .subscribe(user => this.user = user);
    return this.user;
  }
}
