import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class UtilisateurService {

  constructor(private http:HttpClient) { }

  getAllUtilisateur(){
    return this.http.get(`${environment.baseurl}/utilisateur/afficherall` )
  }

  deleteUtilisateur(id: any){
    return this.http.delete(`${environment.baseurl}/utilisateur/supprimer/${id}`)
  }

  archiveUtilisateur(id: any) {
    return this.http.put(`${environment.baseurl}/utilisateur/archiver/${id}`, {});
  }

  detailUtilisateur(id: any){
    return this.http.get(`${environment.baseurl}/utilisateur/affichagebyid/${id}`)
  }

  updateUtilisateur(id:any,utilisateur:any){
    return this.http.put(`${environment.baseurl}/utilisateur/modification/${id}`,utilisateur)
  }
  addUtilisateur(utilisateur:any){
    return this.http.post(`${environment.baseurl}/utilisateur/ajouter`,utilisateur)

  }

  /*



    






  }
   */
}
