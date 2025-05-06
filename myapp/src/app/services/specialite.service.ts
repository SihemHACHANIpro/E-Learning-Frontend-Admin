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

  /*   getAllSession(){
            return this.http.get(`${environment.baseurl}/session/aficherall` )
          }


      deleteSession(id: any){
    return this.http.delete(`${environment.baseurl}/session/supprimer/${id}`)
  }

  detailSession(id: any){
    return this.http.get(`${environment.baseurl}/session/affichagebyid/${id}`)
  } */
}
