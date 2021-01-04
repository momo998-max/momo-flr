import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-groupe-de-competences',
  templateUrl: './groupe-de-competences.component.html',
  styleUrls: ['./groupe-de-competences.component.scss']
})
export class GroupeDeCompetencesComponent implements OnInit {
  // @ts-ignore
  showGrp: boolean;
  // @ts-ignore
  detailGrp: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showGrpFunction();
    this.detailGrpFunction();
  }
  // tslint:disable-next-line:typedef
  showGrpFunction(){
    this.showGrp = !this.showGrp;
  }
  // tslint:disable-next-line:typedef
  detailGrpFunction(){
    this.detailGrp = !this.detailGrp;
  }
}
