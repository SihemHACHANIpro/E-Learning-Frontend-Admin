import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class AdministrateurService {

  constructor(private http:HttpClient) { }

  getAllAdministrateur(){
    return this.http.get( `${environment.baseurl}/admin/afficherall` )
     }
     deleteAdmin(id:any){
      return this.http.delete(`${environment.baseurl}/admin/supprimer/${id}`);


     }

     archiveAdmin(id: any) {
      return this.http.put(`${environment.baseurl}/admin/archiver/${id}`, {});
    }

    updateAdmin(id:any,administrateur:any) {
      return this.http.put(`${environment.baseurl}/admin/modification/${id}`,administrateur); }


      detailsAdmin(id: any){
        return this.http.get(`${environment.baseurl}/admin/affichagebyid/${id}`);
        }

        addAmin(administrateur:any){
          return this.http.post(`${environment.baseurl}/admin/ajouter`,administrateur)
         }


  


}
