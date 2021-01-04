import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-groupe-de-competence',
  templateUrl: './add-groupe-de-competence.component.html',
  styleUrls: ['./add-groupe-de-competence.component.scss']
})
export class AddGroupeDeCompetenceComponent implements OnInit {
// @ts-ignore
  loginForm6: FormGroup;
  loading = false;
  submitted = false;
  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loginForm6 = this.formBuilder.group ({
      libelle: ['', Validators.required],
      description: ['', Validators.required],
      competences: ['', Validators.required],
    });
  }
  // tslint:disable-next-line:typedef
  get f() { return this.loginForm6.controls; }
}
