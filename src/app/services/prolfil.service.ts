import { Injectable } from '@angular/core';
import {environment} from '../../environments/environment';
import {HttpClient} from '@angular/common/http';
import {User} from '../Models/user.model';
import {Profil} from '../Models/profil.model';

@Injectable({
  providedIn: 'root'
})
export class ProlfilService {
  private API_URL2 = environment.apiUrl2;

  constructor(
    private http: HttpClient,
  ) { }
  // tslint:disable-next-line:typedef
  getAllProfilsUsers(id: any) {
    return this.http.get<Profil[]>(`${this.API_URL2}/profil/${id}/users`);
  }
}
