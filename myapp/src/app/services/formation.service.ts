import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class FormationService {
constructor(private http:HttpClient) { }

  getAllFormation(){
  return this.http.get( `${environment.baseurl}/formation/aficherall` )
   }

    // Supprimer une formation
  deleteFormation(id: any) {
  return this.http.delete(`${environment.baseurl}/formation/supprimer/${id}`);
  }

detailsFormation(id: any){
 return this.http.get(`${environment.baseurl}/formation/affichagebyid/${id}`);
 }

updateFormation(id:any,formation:any) {
  return this.http.put(`${environment.baseurl}/formation/modification/${id}`,formation); }

addFormation(formation:any){
  return this.http.post(`${environment.baseurl}/formation/ajouter`,formation)
 }
}
