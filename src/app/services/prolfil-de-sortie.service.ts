import { Injectable } from '@angular/core';
import {User} from '../Models/user.model';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {ProfilDeSortie} from '../Models/ProfilSortie.model';

@Injectable({
  providedIn: 'root'
})
export class ProlfilDeSortieService {
  private API_URL2 = environment.apiUrl2;

  constructor(
    private http: HttpClient,
  ) { }
  // tslint:disable-next-line:typedef
  getAllSortieProfils() {
    return this.http.get<ProfilDeSortie[]>(`${this.API_URL2}/profilsorties`);
  }
}
