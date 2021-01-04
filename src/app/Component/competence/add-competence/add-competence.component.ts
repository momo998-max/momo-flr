import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-competence',
  templateUrl: './add-competence.component.html',
  styleUrls: ['./add-competence.component.scss']
})
export class AddCompetenceComponent implements OnInit {
  // @ts-ignore
  loginForm7: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loginForm7 = this.formBuilder.group ({
      libelle: ['', Validators.required],
      description: ['', Validators.required],
      groupedecompetences: ['', Validators.required],
    });
  }
  // tslint:disable-next-line:typedef
  get f() { return this.loginForm7.controls; }
}
