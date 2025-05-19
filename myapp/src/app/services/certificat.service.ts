import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class CertificatService {

  constructor(private http:HttpClient) { }

  getAllCertificat(){
    return this.http.get(`${environment.baseurl}/certificat/aficherall`)
  }

  deleteCertificat(id: any) {
    return this.http.delete(`${environment.baseurl}/certificat/supprimer/${id}`);
  }

  archiveCertificat(id: any) {
    return this.http.put(`${environment.baseurl}/certificat/archiver/${id}`, {});
  }


}
/*



  addCandidat(candidat:any){
    return this.http.post(`${environment.baseurl}/candidat/ajouter`,candidat)
   }

  detailCandidat(id: any) {
    return this.http.get(`${environment.baseurl}/candidat/affichagebyid/${id}`);
  }

  updateCandidat(id: any, candidat: any) {
    return this.http.put(`${environment.baseurl}/candidat/modification/${id}`, candidat);
  }




}

 */
