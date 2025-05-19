import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class EvenementService {

  constructor(private http: HttpClient) { }

  getAllEvenement() {
    return this.http.get(`${environment.baseurl}/evenement/aficherall`);
  }
  deleteEvenement(id: any) {
    return this.http.delete(`${environment.baseurl}/evenement/supprimer/${id}`);
  }

  archiveEvenement(id: any) {
    return this.http.put(`${environment.baseurl}/evenement/archiver/${id}`, {});
  }


  detailEvenement(id: any) {
    return this.http.get(`${environment.baseurl}/evenement/affichagebyid/${id}`);
  }


  updateEvenement(id: any, evenement: any) {
    return this.http.put(`${environment.baseurl}/evenement/modification/${id}`,evenement);
  }

  addEvenement(evenement: any) {
    return this.http.post(`${environment.baseurl}//evenement/ajouter`,evenement);
  }

}
