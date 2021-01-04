import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import {AppRoutingModule } from './app-routing.module';
import {AppComponent } from './app.component';
import {AlertComponent } from './Component/alert/alert.component' ;
import {HomeComponent } from './home/home/home.component';
import {LoginComponent } from './login/login/login.component';
import {ReactiveFormsModule } from '@angular/forms';
import {ErrorInterceptor } from './helpers/error.interceptor';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSliderModule } from '@angular/material/slider';
import { MatButtonModule } from '@angular/material/button';
import {MatIconModule} from '@angular/material/icon';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatInputModule} from '@angular/material/input';
import {JwtInterceptor} from './helpers/jwt.interceptor';
import { UserComponent } from './Component/user/user.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatGridListModule} from '@angular/material/grid-list';
import { ApprenantComponent } from './Component/apprenant/apprenant.component';
import { FormateurComponent } from './Component/formateur/formateur.component';
import { CmComponent } from './Component/cm/cm.component';
import {MatListModule} from '@angular/material/list';
import { FlexLayoutModule } from '@angular/flex-layout';
import {MatOptionModule} from '@angular/material/core';
import { FormsModule} from '@angular/forms';
import {MatMenuModule} from '@angular/material/menu';
import {ScrollingModule} from '@angular/cdk/scrolling';
import {MatSelectModule} from '@angular/material/select';
import { PromoComponent } from './Component/promo/promo.component';
import { NavbarComponent } from './Component/navbar/navbar.component';
import { PromoAddComponent } from './Component/promo/promo-add/promo-add.component';
import { ReferentielComponent } from './Component/referentiel/referentiel.component';
import { AddReferentielComponent } from './Component/referentiel/add-referentiel/add-referentiel.component';
import { GroupeDeCompetencesComponent } from './Component/groupe-de-competences/groupe-de-competences.component';
import { AddGroupeDeCompetenceComponent } from './Component/groupe-de-competences/add-groupe-de-competence/add-groupe-de-competence.component';
import { CompetenceComponent } from './Component/competence/competence.component';
import { AddCompetenceComponent } from './Component/competence/add-competence/add-competence.component';
import { ProfilDeSortieComponent } from './Component/profil-de-sortie/profil-de-sortie.component';
import { AddProfilDeSortieComponent } from './Component/profil-de-sortie/add-profil-de-sortie/add-profil-de-sortie.component';
import {MatChipsModule} from '@angular/material/chips';
import {MatTableModule} from '@angular/material/table';
import {MatCardModule} from '@angular/material/card';
import { ProfilComponent } from './Component/profil/profil.component';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    AlertComponent,
    HomeComponent,
    UserComponent,
    ApprenantComponent,
    FormateurComponent,
    CmComponent,
    PromoComponent,
    NavbarComponent,
    PromoAddComponent,
    ReferentielComponent,
    AddReferentielComponent,
    GroupeDeCompetencesComponent,
    AddGroupeDeCompetenceComponent,
    CompetenceComponent,
    AddCompetenceComponent,
    ProfilDeSortieComponent,
    AddProfilDeSortieComponent,
    ProfilComponent,
  ],
    imports: [
        BrowserModule,
        HttpClientModule,
        AppRoutingModule,
        FormsModule,
        ReactiveFormsModule,
        BrowserAnimationsModule,
        MatSliderModule,
        MatButtonModule,
        MatIconModule,
        MatToolbarModule,
        MatInputModule,
        MatMenuModule,
        MatSidenavModule,
        MatGridListModule,
        MatListModule,
        FlexLayoutModule,
        MatOptionModule,
        ScrollingModule,
        MatSelectModule,
        MatChipsModule,
        MatTableModule,
        MatCardModule
    ],
  providers: [
    {provide: HTTP_INTERCEPTORS, useClass: JwtInterceptor , multi: true},
    {provide: HTTP_INTERCEPTORS, useClass: ErrorInterceptor , multi: true}
    ],
  bootstrap: [AppComponent]
})
export class AppModule { }
