import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './component/home/home.component';
import { ListformationComponent } from './formation/listformation/listformation.component';
import { AddformationComponent } from './formation/addformation/addformation.component';
import { LayoutComponent } from './component/layout/layout.component';
import { ListprogrammeComponent } from './programme/listprogramme/listprogramme.component';
import { DetailformationComponent } from './formation/detailformation/detailformation.component';
import { UpdateformationComponent } from './formation/updateformation/updateformation.component';
import { DetailsprogrammeComponent } from './programme/detailsprogramme/detailsprogramme.component';
import { ListsessionComponent } from './session/listsession/listsession.component';
import { DetailsessionComponent } from './session/detailsession/detailsession.component';
import { ListSpecialiteComponent } from './specialite/list-specialite/list-specialite.component';
import { UpdeteprogrammeComponent } from './programme/updeteprogramme/updeteprogramme.component';
import { UpdatesessionComponent } from './session/updatesession/updatesession.component';
import { DetailSpecialiteComponent } from './specialite/detail-specialite/detail-specialite.component';
import { UpdatespecialiteComponent } from './specialite/updatespecialite/updatespecialite.component';
import { ListprojetComponent } from './projetfreelance/listprojet/listprojet.component';
import { DetailprojetComponent } from './projetfreelance/detailprojet/detailprojet.component';
import { UpdateprojetComponent } from './projetfreelance/updateprojet/updateprojet.component';
import { ListPlanificationComponent } from './planification/list-planification/list-planification.component';
import { ListrapportComponent } from './rapport/listrapport/listrapport.component';
import { AddprogrammeComponent } from './programme/addprogramme/addprogramme.component';
import { AddsessionComponent } from './session/addsession/addsession.component';
import { AddspecialiteComponent } from './specialite/addspecialite/addspecialite.component';
import { AddprojetComponent } from './projetfreelance/addprojet/addprojet.component';
import { DetailPlanificationComponent } from './planification/detail-planification/detail-planification.component';
import { UpdatePlanificationComponent } from './planification/update-planification/update-planification.component';
import { DetailrapportComponent } from './rapport/detailrapport/detailrapport.component';
import { UpdaterapportComponent } from './rapport/updaterapport/updaterapport.component';
import { AddrapportComponent } from './rapport/addrapport/addrapport.component';
import { AddplanificationComponent } from './planification/addplanification/addplanification.component';
import { ListutilisateurComponent } from './utilisateur/listutilisateur/listutilisateur.component';
import { ListevenementComponent } from './evenement/listevenement/listevenement.component';
import { DetailutilisateurComponent } from './utilisateur/detailutilisateur/detailutilisateur.component';
import { UpdateutilisateurComponent } from './utilisateur/updateutilisateur/updateutilisateur.component';
import { AddutilisateurComponent } from './utilisateur/addutilisateur/addutilisateur.component';
import { ListAdministrateurComponent } from './administrateur/list-administrateur/list-administrateur.component';
import { UpdateadminComponent } from './administrateur/updateadmin/updateadmin.component';
import { DetailsadminComponent } from './administrateur/detailsadmin/detailsadmin.component';
import { AddadminComponent } from './administrateur/addadmin/addadmin.component';
import { ListcandidatComponent } from './candidat/listcandidat/listcandidat.component';
import { AddcandidatComponent } from './candidat/addcandidat/addcandidat.component';
import { ListformateurComponent } from './formateur/listformateur/listformateur.component';
import { AddformateurComponent } from './formateur/addformateur/addformateur.component';
import { UpdateformateurComponent } from './formateur/updateformateur/updateformateur.component';
import { ListchefdeprojetComponent } from './chefdeprojet/listchefdeprojet/listchefdeprojet.component';
import { UpdatechefdeprojrtComponent } from './chefdeprojet/updatechefdeprojrt/updatechefdeprojrt.component';
import { AddchefdeprojetComponent } from './chefdeprojet/addchefdeprojet/addchefdeprojet.component';
import { DeletachefdeprojetComponent } from './chefdeprojet/deletachefdeprojet/deletachefdeprojet.component';
import { UpdatecandidatComponent } from './candidat/updatecandidat/updatecandidat.component';
import { DetailevenementComponent } from './evenement/detailevenement/detailevenement.component';
import { UpdateevenementComponent } from './evenement/updateevenement/updateevenement.component';
import { AddevenementComponent } from './evenement/addevenement/addevenement.component';
import { ListcertificatComponent } from './certificat/listcertificat/listcertificat.component';
import { AddcertificatComponent } from './certificat/addcertificat/addcertificat.component';
import { ListpostulerComponent } from './postuler/listpostuler/listpostuler.component';
import { AddpostulerComponent } from './postuler/addpostuler/addpostuler.component';
import { UpdatepostulerComponent } from './postuler/updatepostuler/updatepostuler.component';


const routes: Routes = [
  { path: '',
     component: HomeComponent,
     children:[
    {path: '',component: LayoutComponent},
    { path: 'listformation', component: ListformationComponent },
    { path: 'detailformation/:id', component: DetailformationComponent },
    { path: 'updateformation/:id', component: UpdateformationComponent },
    { path: 'addformation', component: AddformationComponent },
    /* _______________________________________ */

      {path: 'listprogramme',component: ListprogrammeComponent},
      {path: 'detailsprogramme/:id',component: DetailsprogrammeComponent},
      {path: 'updeteprogramme/:id',component: UpdeteprogrammeComponent},
      {path: 'addprogramme',component: AddprogrammeComponent},

    /* __________________________________ */
       {path: 'listsession',component: ListsessionComponent},
      {path: 'detailsession/:id',component: DetailsessionComponent},
      {path: 'updatesession/:id',component: UpdatesessionComponent},
      {path: 'addsession',component: AddsessionComponent},

    /* ________________________________ */
      {path: 'list-specialite',component: ListSpecialiteComponent},
      {path: 'detail-specialite/:id',component: DetailSpecialiteComponent},
      {path: 'updatespecialite/:id',component: UpdatespecialiteComponent},
      {path: 'addspecialite',component: AddspecialiteComponent},

    /* _______________________________________ */
       {path: 'listprojet',component: ListprojetComponent},
       {path: 'detailprojet/:id',component: DetailprojetComponent},
       {path: 'updateprojet/:id',component: UpdateprojetComponent},
       {path: 'addprojet',component: AddprojetComponent},

       /* ____________________________________ */
       {path: 'list-planification',component: ListPlanificationComponent},
       {path: 'detail-planification/:id',component: DetailPlanificationComponent},
       {path: 'update-planification/:id',component: UpdatePlanificationComponent},
       {path: 'addplanification',component: AddplanificationComponent},

       /* _________________________ */
       {path: 'listrapport',component: ListrapportComponent},
       {path: 'detailrapport/:id',component: DetailrapportComponent},
       {path: 'updaterapport/:id',component: UpdaterapportComponent},
       {path: 'addrapport',component: AddrapportComponent},

       /* ___________________________________ */
       {path: 'listutilisateur',component: ListutilisateurComponent},
       {path: 'detailutilisateur/:id',component: DetailutilisateurComponent},
       {path: 'updateutilisateur/:id',component: UpdateutilisateurComponent},
       {path: 'addutilisateur',component:AddutilisateurComponent},



         /* _____________________*/
           {path: 'listevenement',component: ListevenementComponent},
           { path: 'detailevenement/:id', component: DetailevenementComponent },
           { path: 'updateevenement/:id', component: UpdateevenementComponent },
           { path: 'addevenement', component: AddevenementComponent },

           /* __________________________ */
           {path: 'list-administrateur',component: ListAdministrateurComponent},
           {path: 'updateadmin/:id',component: UpdateadminComponent},
           {path: 'detailsadmin',component: DetailsadminComponent},
           {path: 'addadmin',component: AddadminComponent},
           /* ___________________________ */
           {path: 'listcandidat',component: ListcandidatComponent},
           {path: 'addcandidat',component: AddcandidatComponent},
           {path: 'updatecandidat/:id',component: UpdatecandidatComponent},
           /* ____________________ */
           {path: 'listformateur',component: ListformateurComponent},
           {path: 'addformateur',component: AddformateurComponent},
           {path: 'updateformateur/:id',component: UpdateformateurComponent},
           /* ___________________________________________________ */

           {path:'listchefdeprojet',component: ListchefdeprojetComponent},
           {path:'updatechefdeprojrt/:id',component: UpdatechefdeprojrtComponent},
           {path:'addchefdeprojet',component: AddchefdeprojetComponent},

           /* ________________________________ */
           {path:'listcertificat',component: ListcertificatComponent},
           {path:'addcertificat',component: AddcertificatComponent},
           {path:'updatecertificat',component: UpdatecandidatComponent},
           /* --------------------------------- */

            {path:'listpostuler',component: ListpostulerComponent},
            {path:'addpostuler',component: AddpostulerComponent},
            {path:'updatepostuler/:id',component: UpdatepostulerComponent},
            /* ________________________________________ */













  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
