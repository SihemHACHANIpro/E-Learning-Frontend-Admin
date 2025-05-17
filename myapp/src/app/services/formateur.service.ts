import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';


@Injectable({
  providedIn: 'root'
})
export class FormateurService {

  constructor(private http: HttpClient) {}

  getAllFormateur() {
    return this.http.get(`${environment.baseurl}/formateur/aficherall`);
  }

  deleteFormateur(id: any) {
    return this.http.delete(`${environment.baseurl}/formateur/supprimer/${id}`);
  }

  archiveFormateur(id: any) {
    return this.http.put(`${environment.baseurl}/formateur/archiver/${id}`, {});
  }

  addFormateur(formateur: any) {
    return this.http.post(`${environment.baseurl}/formateur/ajouter`, formateur);
  }

  detailFormateur(id: any) {
    return this.http.get(`${environment.baseurl}/formateur/affichagebyid/${id}`);
  }

  updateFormateur(id: any, formateur: any) {
    return this.http.put(`${environment.baseurl}/formateur/modification/${id}`, formateur);
  }
}
