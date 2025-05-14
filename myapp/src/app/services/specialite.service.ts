import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class SpecialiteService {

  constructor(private http:HttpClient) { }

  getAllSpecilite(){
    return this.http.get(`${environment.baseurl}/Specialite/afficherall` )
  }
  deleteSpecialite(id: any){
    return this.http.delete(`${environment.baseurl}/Specialite/supprimer/${id}`)
  }

  detailSpecialite(id: any){
    return this.http.get(`${environment.baseurl}/Specialite/affichagebyid/${id}`)
  }

  updateSpecialite(id:any,spcialite:any){
    return this.http.put(`${environment.baseurl}/Specialite/modification/${id}`,spcialite)
  }

  addSpecialiye(specialite:any){
    return this.http.post(`${environment.baseurl}/Specialite/ajouter`,specialite)

  }



archiveSpecialite(id: any) {
  return this.http.put(`${environment.baseurl}/Specialite/archiver/${id}`, {});
}


}
