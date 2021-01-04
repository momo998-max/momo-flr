import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-profil-de-sortie',
  templateUrl: './profil-de-sortie.component.html',
  styleUrls: ['./profil-de-sortie.component.scss']
})
export class ProfilDeSortieComponent implements OnInit {
  // @ts-ignore
  showProfild: boolean;

  constructor() { }

  ngOnInit(): void {
    this.showProfildFunction();
  }
  // tslint:disable-next-line:typedef
  showProfildFunction(){
    this.showProfild = !this.showProfild;
  }
  // tslint:disable-next-line:typedef
  // get f() { return this.loginForm3.controls; }
}
