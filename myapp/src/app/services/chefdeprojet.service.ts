import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ChefdeprojetService {

  constructor(private http:HttpClient) { }

  getAllChefdeproje() {
    return this.http.get(`${environment.baseurl}/chefdeprojet/afficherall`);
  }
  deleteChefdeprojet(id: any) {
    return this.http.delete(`${environment.baseurl}/chefdeprojet/supprimer/${id}`);
  }

  archiveChefdeprojet(id: any) {
    return this.http.put(`${environment.baseurl}/chefdeprojet/archiver/${id}`, {});
  }

  detailChefdeprojet(id: any) {
    return this.http.get(`${environment.baseurl}/chefdeprojet/affichagebyid/${id}`);
  }

  updateChefdeprojet(id: any, chefdeprojet: any) {
    return this.http.put(`${environment.baseurl}/chefdeprojet/modification/${id}`, chefdeprojet);
  }

  addChefdeprojet(chefdeprojet: any) {
    return this.http.post(`${environment.baseurl}/chefdeprojet/ajouter`, chefdeprojet);
  }



}
