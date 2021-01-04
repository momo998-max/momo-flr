import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-promo',
  templateUrl: './promo.component.html',
  styleUrls: ['./promo.component.scss']
})
export class PromoComponent implements OnInit {
  displayedColumns = ['titre', 'fabrique', 'description', 'action'];
  displayedColumns2 = ['presentation', 'programme', 'action'];
  dataSource = ELEMENT_DATA;

  dataSource2 = ELEMENT_DATA2;
  // @ts-ignore
  showPromo: boolean;
  // @ts-ignore
  detailPromo: boolean;
  // @ts-ignore
  detailref: boolean;
  // @ts-ignore
  detailMembre: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showPromoFunction();
    this.detailPromoFunction();
    this.detailref = true;
    this.detailMembreFunction();
  }
  // tslint:disable-next-line:typedef
  detailMembreFunction(){
    this.detailMembre = !this.detailMembre;
  }
  // tslint:disable-next-line:typedef
  detailRefFunction(){
    this.detailref = !this.detailref;
    this.showPromoFunction();
  }
  // tslint:disable-next-line:typedef
  showPromoFunction(){
    this.showPromo = !this.showPromo;
  }
  // tslint:disable-next-line:typedef
  detailPromoFunction(){
    this.detailPromo = !this.detailPromo;
  }
}
export interface PeriodicElement {
  titre: string;
  fabrique: string;
  description: string;
  action: string;
}
export interface PeriodicElement2 {
  presentation: string;
  programme: string;
  action: string;
}

const ELEMENT_DATA: PeriodicElement[] = [
  {titre: 'SA-C1', fabrique: 'SONATEL', description: 'Description 1', action: ''},
  {titre: 'SA-C2', fabrique: 'SONATEL', description: 'Description 2', action: ''},
  {titre: 'SA-C3', fabrique: 'SONATEL', description: 'Description 3', action: ''},
  {titre: 'SA-C4', fabrique: 'SONATEL', description: 'Description 4', action: ''},
];
const ELEMENT_DATA2: PeriodicElement2[] = [
  {presentation: 'Developpement Web', programme: 'Programme du referentiel', action: ''},
  {presentation: 'Developpement Web', programme: 'Programme du referentiel', action: ''},
];
