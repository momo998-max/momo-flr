import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { first } from 'rxjs/operators';
import { AlertService} from '../../services/alert.service' ;
import { AuthenticationService } from '../../services/auth.service' ;
import {UserService} from '../../services/user.service';
import jwt_decode from 'jwt-decode';
@Component({ templateUrl: 'login.component.html' })
export class LoginComponent implements OnInit {
  // @ts-ignore
  loginForm: FormGroup;
  loading = false;
  submitted = false;
  // @ts-ignore
  returnUrl: string;
  constructor(
    private formBuilder: FormBuilder,
    private route: ActivatedRoute,
    private router: Router,
    private authenticationService: AuthenticationService,
    private alertService: AlertService,
    private userService: UserService,
    // private use: any,
  ) {
// redirect to home if already logged in
    if (this.authenticationService.currentUserValue ) {
      this.router.navigate(['/']);
    }
  }
  // tslint:disable-next-line:typedef
  ngOnInit() {
    this.loginForm = this.formBuilder.group ({
      username: ['', Validators.required],
      password: ['', Validators.required],
    });
    // get return url from route parameters or default to '/'
    this.returnUrl = this.route.snapshot.queryParams.returnUrl || '/';
  }
  // convenience getter for easy access to form fields
  // tslint:disable-next-line:typedef
  get f() { return this.loginForm.controls; }
  // tslint:disable-next-line:typedef
  onSubmit() {
    this.submitted = true;
// reset alerts on submit
    // @ts-ignore
    // this.alertService.clear();
    // stop here if form is invalid
    if (this.loginForm.invalid ) {
      return;
    }
    this.loading = true;
    // console.log(this.use),
    this.authenticationService.login (this.f.username.value,
      this.f.password.value)
      .pipe(first())
      .subscribe(
        data => {
          console.log(this.returnUrl);
          const use = this.getToken();
          const token = this.getDecodedAccessToken(use['token']);
          // tslint:disable-next-line:triple-equals
          if (token['roles'] == 'ROLE_ADMIN'){
            this.router.navigate([this.returnUrl]);
          }
          // tslint:disable-next-line:triple-equals
          else if (token['roles'] == 'ROLE_CM'){
            this.router.navigate(['/app-cm']);
          }
          // tslint:disable-next-line:triple-equals
          else if (token['roles'] == 'ROLE_FORMATEUR'){
            this.router.navigate(['/app-formateur']);
          }
          // tslint:disable-next-line:triple-equals
          else if (token['roles'] == 'ROLE_APPRENANT'){
            this.router.navigate(['/app-apprenant']);
          }
        },
        error => {
          // @ts-ignore
          // this.alertService.error(error);
          this.loading = false;
        });
  }
  getDecodedAccessToken(token: any): any {
    try{
      return jwt_decode(token);
    }
    catch (Error){
      return null;
    }
  }
  // tslint:disable-next-line:typedef
  getToken() {
    const use = JSON.parse(localStorage.getItem('currentUser') || '');
    return use;
  }
}
