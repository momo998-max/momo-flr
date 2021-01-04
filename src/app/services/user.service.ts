import { Injectable } from '@angular/core';
import { HttpClient, HttpHandler } from '@angular/common/http';
import {User} from '../Models/user.model';
// tslint:disable-next-line:import-spacing
import { environment } from
    'src/environments/environment';
import {catchError, map, retry} from 'rxjs/operators';
import {Observable} from 'rxjs';
import {Profil} from '../Models/profil.model';
@Injectable({
  providedIn: 'root'
})
export class UserService {
  private API_URL = environment.apiUrl;
  private API_URL2 = environment.apiUrl2;
  data: User =
    {
      username: '',
      password: '',
      token: '',
      prenom: '',
      Nom: '',
      Email: '',
      Telephone: '',
      genre: '',
      profil: '',
      // @ts-ignore
      statut: '',
      avatar: '',
      archivage: false
    };

  constructor(private http: HttpClient,
  ) { }
// tslint:disable-next-line:typedef
  getAll() {
    return this.http.get<User[]>(`${this.API_URL2}/users?Archivage=false`);
  }
  // tslint:disable-next-line:typedef
  getAllProf() {
    return this.http.get<Profil[]>(`${this.API_URL2}/profils`);
  }
  // tslint:disable-next-line:typedef
  getOneUser(id: any) {
    return this.http.get<User>(`${this.API_URL2}/users/${id}`);
  }
  // tslint:disable-next-line:typedef
  addUser(data: User) {
    return this.http.post < any >( `${ this.API_URL2 }/users`, {data})
      // tslint:disable-next-line:no-shadowed-variable
      .pipe ( map (reponse => {
        console.log(reponse);
        return reponse;
      })) ;
  }

// tslint:disable-next-line:typedef
  delete(id: any) {
    return this.http.delete(`${this.API_URL2}/users/${id}/archive`);
  }
}
