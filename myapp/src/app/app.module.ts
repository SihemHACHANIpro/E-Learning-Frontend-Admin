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
    UpdatesessionComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule // ✅ Ajouté ici
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
