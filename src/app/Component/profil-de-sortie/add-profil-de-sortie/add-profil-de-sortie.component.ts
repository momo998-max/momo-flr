import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-profil-de-sortie',
  templateUrl: './add-profil-de-sortie.component.html',
  styleUrls: ['./add-profil-de-sortie.component.scss']
})
export class AddProfilDeSortieComponent implements OnInit {
  // @ts-ignore
  loginForm9: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) {
    this.loginForm9 = this.formBuilder.group ({
      libelle: ['', Validators.required],
    });
  }

  ngOnInit(): void {
    this.loginForm9 = this.formBuilder.group ({
      libelle: ['', Validators.required],
    });
  }
  // tslint:disable-next-line:typedef
  get f() { return this.loginForm9.controls; }
}
