import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home/home.component';
import { LoginComponent } from './login/login/login.component';
import {AuthGuard} from './helpers/auth.guard';
import {UserComponent} from './Component/user/user.component';
import {ApprenantComponent} from './Component/apprenant/apprenant.component';
import {CmComponent} from './Component/cm/cm.component';
import {FormateurComponent} from './Component/formateur/formateur.component';
import {PromoComponent} from './Component/promo/promo.component';
import {PromoAddComponent} from './Component/promo/promo-add/promo-add.component';
import {ReferentielComponent} from './Component/referentiel/referentiel.component';
import {AddReferentielComponent} from './Component/referentiel/add-referentiel/add-referentiel.component';
import {GroupeDeCompetencesComponent} from './Component/groupe-de-competences/groupe-de-competences.component';
import {AddGroupeDeCompetenceComponent} from './Component/groupe-de-competences/add-groupe-de-competence/add-groupe-de-competence.component';
import {CompetenceComponent} from './Component/competence/competence.component';
import {AddCompetenceComponent} from './Component/competence/add-competence/add-competence.component';
import {ProfilDeSortieComponent} from './Component/profil-de-sortie/profil-de-sortie.component';
import {AddProfilDeSortieComponent} from './Component/profil-de-sortie/add-profil-de-sortie/add-profil-de-sortie.component';
import { ProfilComponent } from './Component/profil/profil.component';
const routes: Routes = [
  { path: '', component: HomeComponent, canActivate: [AuthGuard] },
  { path: 'login', component: LoginComponent },
  { path: 'home', component: HomeComponent },
  { path: 'user', component: UserComponent },
  {path: 'profil', component: ProfilComponent},
  { path: 'app-apprenant', component: ApprenantComponent },
  { path: 'app-cm', component: CmComponent },
  { path: 'app-formateur', component: FormateurComponent },
  { path: 'app-promo', component: PromoComponent },
  { path: 'app-promo-add', component: PromoAddComponent },
  { path: 'app-referentiel', component: ReferentielComponent},
  { path: 'app-add-referentiel', component: AddReferentielComponent},
  { path: 'app-groupe-de-competences', component: GroupeDeCompetencesComponent},
  { path: 'app-add-groupe-de-competence', component: AddGroupeDeCompetenceComponent},
  { path: 'app-competence', component: CompetenceComponent},
  { path: 'app-add-competence', component: AddCompetenceComponent},
  { path: 'app-profil-de-sortie', component: ProfilDeSortieComponent},
  { path: 'app-add-profil-de-sortie', component: AddProfilDeSortieComponent},
// otherwise redirect to home
  { path: '**', redirectTo: '' }
];
export const AppRoutingModule = RouterModule. forRoot(routes);