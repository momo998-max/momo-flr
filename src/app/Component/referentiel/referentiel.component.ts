import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-referentiel',
  templateUrl: './referentiel.component.html',
  styleUrls: ['./referentiel.component.scss']
})
export class ReferentielComponent implements OnInit {
  // @ts-ignore
  showReferentiel: boolean;
  // @ts-ignore
  detailReferentiel: boolean;
  // @ts-ignore
  detailgrp: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showReferentielFunction();
    this.detailReferentielFunction();
    this.detailgrpFunction();
  }
  // tslint:disable-next-line:typedef
  showReferentielFunction(){
    this.showReferentiel = !this.showReferentiel;
  }
  // tslint:disable-next-line:typedef
  detailReferentielFunction(){
    this.detailReferentiel = !this.detailReferentiel;
  }
  // tslint:disable-next-line:typedef
  detailgrpFunction(){
    this.detailgrp = !this.detailgrp;
  }
}
