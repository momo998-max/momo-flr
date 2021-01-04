import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-competence',
  templateUrl: './competence.component.html',
  styleUrls: ['./competence.component.scss']
})
export class CompetenceComponent implements OnInit {
  // @ts-ignore
  showCompetences: boolean;
  // @ts-ignore
  detailComp: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showCompetencesFunction();
    this.detailCompFunction();
  }
// tslint:disable-next-line:typedef
  showCompetencesFunction(){
    this.showCompetences = !this.showCompetences;
  }
  // tslint:disable-next-line:typedef
  detailCompFunction(){
    this.detailComp = !this.detailComp;
  }
}
