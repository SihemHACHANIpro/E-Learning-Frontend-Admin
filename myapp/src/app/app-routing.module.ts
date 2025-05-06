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

    /* __________________________________ */
    {path: 'listsession',component: ListsessionComponent},
    {path: 'detailsession/:id',component: DetailsessionComponent},
    {path: 'updatesession/:id',component: UpdatesessionComponent},
    /* ________________________________ */
    {path: 'list-specialite',component: ListSpecialiteComponent},








  ]},

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
