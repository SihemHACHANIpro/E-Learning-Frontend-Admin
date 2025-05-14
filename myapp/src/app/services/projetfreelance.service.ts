import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProjetfreelanceService {

  constructor(private http:HttpClient) { }

  getAllProjetfreelance(){
    return this.http.get(`${environment.baseurl}/projetfreelance/aficherall` )
  }
  deleteProjetfreelance(id: any){
    return this.http.delete(`${environment.baseurl}/projetfreelance/supprimer/${id}`)


  }
  detailProjetfreelance(id: any){
    return this.http.get(`${environment.baseurl}/projetfreelance/affichagebyid/${id}`)
  }

  updateProjet(id:any,projetfreelance:any){
    return this.http.put(`${environment.baseurl}/projetfreelance/modification/${id}`,projetfreelance)
  }


  addProjet(projetfreelance:any){
    return this.http.post(`${environment.baseurl}/projetfreelance/ajouter`,projetfreelance)

  }

   archiveProjet(id: any) {
  return this.http.put(`${environment.baseurl}/projetfreelance/archiver/${id}`, {});
}
 


}
