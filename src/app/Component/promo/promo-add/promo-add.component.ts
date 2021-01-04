import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-promo-add',
  templateUrl: './promo-add.component.html',
  styleUrls: ['./promo-add.component.scss']
})
export class PromoAddComponent implements OnInit {
  // @ts-ignore
  loginForm3: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loginForm3 = this.formBuilder.group ({
      langue: ['', Validators.required],
      titre: ['', Validators.required],
      description: ['', Validators.required],
      lieu: ['', Validators.required],
      fabrique: ['', Validators.required],
      dateDebut: ['', Validators.required],
      dateFin: ['', Validators.required],
      referentiels: ['', Validators.required],
      apprenants: ['', Validators.required],
    });
  }
  // tslint:disable-next-line:typedef
  get f() { return this.loginForm3.controls; }
}
