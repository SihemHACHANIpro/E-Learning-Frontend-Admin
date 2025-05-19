import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LayoutComponent } from './component/layout/layout.component';
import { FooterComponent } from './component/footer/footer.component';
import { HomeComponent } from './component/home/home.component';
import { NavbarComponent } from './component/navbar/navbar.component';
import { SidebarComponent } from './component/sidebar/sidebar.component';
import { ReactiveFormsModule } from '@angular/forms';
import { RouterModule } from '@angular/router'; // ✅ Ajouté pour routerLink

import { ListformationComponent } from './formation/listformation/listformation.component';
import { AddformationComponent } from './formation/addformation/addformation.component';
import { ListprogrammeComponent } from './programme/listprogramme/listprogramme.component';
import { DetailformationComponent } from './formation/detailformation/detailformation.component';
import { UpdateformationComponent } from './formation/updateformation/updateformation.component';
import { DetailsprogrammeComponent } from './programme/detailsprogramme/detailsprogramme.component';
import { ListsessionComponent } from './session/listsession/listsession.component';
import { DetailsessionComponent } from './session/detailsession/detailsession.component';
import { ListSpecialiteComponent } from './specialite/list-specialite/list-specialite.component';
import { DetailSpecialiteComponent } from './specialite/detail-specialite/detail-specialite.component';
import { UpdeteprogrammeComponent } from './programme/updeteprogramme/updeteprogramme.component';
import { UpdatesessionComponent } from './session/updatesession/updatesession.component';
import { UpdatespecialiteComponent } from './specialite/updatespecialite/updatespecialite.component';
import { ListprojetComponent } from './projetfreelance/listprojet/listprojet.component';
import { DetailprojetComponent } from './projetfreelance/detailprojet/detailprojet.component';
import { UpdateprojetComponent } from './projetfreelance/updateprojet/updateprojet.component';
import { AddprojetComponent } from './projetfreelance/addprojet/addprojet.component';
import { ListevenementComponent } from './evenement/listevenement/listevenement.component';
import { DetailevenementComponent } from './evenement/detailevenement/detailevenement.component';
import { UpdateevenementComponent } from './evenement/updateevenement/updateevenement.component';
import { AddevenementComponent } from './evenement/addevenement/addevenement.component';
import { ListPlanificationComponent } from './planification/list-planification/list-planification.component';
import { DetailPlanificationComponent } from './planification/detail-planification/detail-planification.component';
import { UpdatePlanificationComponent } from './planification/update-planification/update-planification.component';
import { AddplanificationComponent } from './planification/addplanification/addplanification.component';
import { ListrapportComponent } from './rapport/listrapport/listrapport.component';
import { AddrapportComponent } from './rapport/addrapport/addrapport.component';
import { UpdaterapportComponent } from './rapport/updaterapport/updaterapport.component';
import { DetailrapportComponent } from './rapport/detailrapport/detailrapport.component';
import { AddprogrammeComponent } from './programme/addprogramme/addprogramme.component';
import { AddsessionComponent } from './session/addsession/addsession.component';
import { AddspecialiteComponent } from './specialite/addspecialite/addspecialite.component';
import { ListutilisateurComponent } from './utilisateur/listutilisateur/listutilisateur.component';
import { AddutilisateurComponent } from './utilisateur/addutilisateur/addutilisateur.component';
import { UpdateutilisateurComponent } from './utilisateur/updateutilisateur/updateutilisateur.component';
import { DetailutilisateurComponent } from './utilisateur/detailutilisateur/detailutilisateur.component';
import { ListAdministrateurComponent } from './administrateur/list-administrateur/list-administrateur.component';
import { ListchefdeprojetComponent } from './chefdeprojet/listchefdeprojet/listchefdeprojet.component';
import { ListcandidatComponent } from './candidat/listcandidat/listcandidat.component';
import { ListformateurComponent } from './formateur/listformateur/listformateur.component';
import { UpdateadminComponent } from './administrateur/updateadmin/updateadmin.component';
import { DetailsadminComponent } from './administrateur/detailsadmin/detailsadmin.component';
import { AddadminComponent } from './administrateur/addadmin/addadmin.component';
import { AddcandidatComponent } from './candidat/addcandidat/addcandidat.component';
import { AddformateurComponent } from './formateur/addformateur/addformateur.component';
import { UpdateformateurComponent } from './formateur/updateformateur/updateformateur.component';
import { DeletachefdeprojetComponent } from './chefdeprojet/deletachefdeprojet/deletachefdeprojet.component';
import { UpdatechefdeprojrtComponent } from './chefdeprojet/updatechefdeprojrt/updatechefdeprojrt.component';
import { AddchefdeprojetComponent } from './chefdeprojet/addchefdeprojet/addchefdeprojet.component';
import { UpdatecandidatComponent } from './candidat/updatecandidat/updatecandidat.component';
import { ListcertificatComponent } from './certificat/listcertificat/listcertificat.component';
import { AddcertificatComponent } from './certificat/addcertificat/addcertificat.component';
import { UpdatecertificatComponent } from './certificat/updatecertificat/updatecertificat.component';
import { ListpostulerComponent } from './postuler/listpostuler/listpostuler.component';
import { AddpostulerComponent } from './postuler/addpostuler/addpostuler.component';
import { UpdatepostulerComponent } from './postuler/updatepostuler/updatepostuler.component';

@NgModule({
  declarations: [
    AppComponent,
    LayoutComponent,
    FooterComponent,
    HomeComponent,
    NavbarComponent,
    SidebarComponent,
    ListformationComponent,
    AddformationComponent,
    ListprogrammeComponent,
    DetailformationComponent,
    UpdateformationComponent,
    DetailsprogrammeComponent,
    ListsessionComponent,
    DetailsessionComponent,
    ListSpecialiteComponent,
    DetailSpecialiteComponent,
    UpdeteprogrammeComponent,
    UpdatesessionComponent,
    UpdatespecialiteComponent,
    ListprojetComponent,
    DetailprojetComponent,
    UpdateprojetComponent,
    AddprojetComponent,
    ListevenementComponent,
    DetailevenementComponent,
    UpdateevenementComponent,
    AddevenementComponent,
    ListPlanificationComponent,
    DetailPlanificationComponent,
    UpdatePlanificationComponent,
    AddplanificationComponent,
    ListrapportComponent,
    AddrapportComponent,
    UpdaterapportComponent,
    DetailrapportComponent,
    AddprogrammeComponent,
    AddsessionComponent,
    AddspecialiteComponent,
    ListutilisateurComponent,
    AddutilisateurComponent,
    UpdateutilisateurComponent,
    DetailutilisateurComponent,
    ListAdministrateurComponent,
    ListchefdeprojetComponent,
    ListcandidatComponent,
    ListformateurComponent,
    UpdateadminComponent,
    DetailsadminComponent,
    AddadminComponent,
    AddcandidatComponent,
    AddformateurComponent,
    UpdateformateurComponent,
    DeletachefdeprojetComponent,
    UpdatechefdeprojrtComponent,
    AddchefdeprojetComponent,
    UpdatecandidatComponent,
    ListcertificatComponent,
    AddcertificatComponent,
    UpdatecertificatComponent,
    ListpostulerComponent,
    AddpostulerComponent,
    UpdatepostulerComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
