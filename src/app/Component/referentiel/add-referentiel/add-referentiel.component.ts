import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-add-referentiel',
  templateUrl: './add-referentiel.component.html',
  styleUrls: ['./add-referentiel.component.scss']
})
export class AddReferentielComponent implements OnInit {
  // @ts-ignore
  loginForm4: FormGroup;
  loading = false;
  submitted = false;

  constructor(
    private formBuilder: FormBuilder,
  ) { }

  ngOnInit(): void {
    this.loginForm4 = this.formBuilder.group ({
      presentation: ['', Validators.required],
      programme: ['', Validators.required],
      criteresdevaluation: ['', Validators.required],
      criteresdadmission: ['', Validators.required],
      groupedecompetences: ['', Validators.required],
    });
  }
  // tslint:disable-next-line:typedef
  get f() { return this.loginForm4.controls; }
}
