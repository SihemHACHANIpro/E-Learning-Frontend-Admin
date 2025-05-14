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

  addRapport(rapport:any){
    return this.http.post(`${environment.baseurl}/rapport/ajouter`,rapport)

  }
  archiveRapport(id: any) {
    return this.http.put(`${environment.baseurl}/rapport/archiver/${id}`, {});
  }



  /*






    }


  }

  archiveFormation(id: any) {
  return this.http.put(`${environment.baseurl}/formation/archiver/${id}`, {});
}
*/



}
