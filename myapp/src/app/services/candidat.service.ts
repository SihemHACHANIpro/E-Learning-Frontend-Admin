import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CandidatService {

  constructor(private http:HttpClient) { }

  getAllCandidat(){
    return this.http.get(`${environment.baseurl}/candidat/afficherall`)
  }

  addCandidat(candidat:any){
    return this.http.post(`${environment.baseurl}/candidat/ajouter`,candidat)
   }


   deleteCandidat(id: any) {
    return this.http.delete(`${environment.baseurl}/candidat/supprimer/${id}`);
  }

  archiveCandidat(id: any) {
    return this.http.put(`${environment.baseurl}/candidat/archiver/${id}`, {});
  }

  detailCandidat(id: any) {
    return this.http.get(`${environment.baseurl}/candidat/affichagebyid/${id}`);
  }

  updateCandidat(id: any, candidat: any) {
    return this.http.put(`${environment.baseurl}/candidat/modification/${id}`, candidat);
  }




}

