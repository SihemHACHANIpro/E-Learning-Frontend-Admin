import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})

export class PlanificationService {
 constructor(private http:HttpClient) { }

 getAllPlanification(){
   return this.http.get(`${environment.baseurl}/Planification/afficherall` )
 }

 deletePlanification(id: any){
  return this.http.delete(`${environment.baseurl}/Planification/supprimer/${id}`)
}
detailPlanification(id: any){
  return this.http.get(`${environment.baseurl}/Planification/affichagebyid/${id}`)
}

UpdatePlanification(id:any,planification:any){
  return this.http.put(`${environment.baseurl}/Planification/modification/${id}`,planification)
}


addPlanification(planification:any){
  return this.http.post(`${environment.baseurl}/Planification/ajouter`,planification)

}

 archivePlanification(id: any) {
  return this.http.put(`${environment.baseurl}/Planification/archiver/${id}`, {});
}
 
}
