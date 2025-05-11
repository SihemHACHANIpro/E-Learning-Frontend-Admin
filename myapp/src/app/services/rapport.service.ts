import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class RapportService {

  constructor(private http:HttpClient) { }

  getAllRapport(){
    return this.http.get(`${environment.baseurl}/rapport/afficherall` )
  }
  deleteRapport(id: any){
    return this.http.delete(`${environment.baseurl}/rapport/supprimer/${id}`)


  }
   detailRapport(id: any){
    return this.http.get(`${environment.baseurl}/rapport/affichagebyid/${id}`)
  }
  updateRapport(id:any,rapport:any){
    return this.http.put(`${environment.baseurl}/rapport//modification/${id}`,rapport)
  }



  /*

    detailProjetfreelance(id: any){
      return this.http.get(`${environment.baseurl}/projetfreelance/affichagebyid/${id}`)
    }

    updateProjet(id:any,projetfreelance:any){
      return this.http.put(`${environment.baseurl}/projetfreelance/modification/${id}`,projetfreelance)
    }


    addProjet(projetfreelance:any){
      return this.http.post(`${environment.baseurl}/projetfreelance/ajouter`,projetfreelance)

    }


  } */
}
