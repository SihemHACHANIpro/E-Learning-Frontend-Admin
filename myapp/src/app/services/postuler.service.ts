import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class PostulerService {

  constructor(private http:HttpClient) { }

  getAllPostuler(){
    return this.http.get(`${environment.baseurl}/postuler/aficherall`)
  }

  deletePostuler(id: any) {
    return this.http.delete(`${environment.baseurl}/postuler/supprimer/${id}`);
  }

  archivePostuler(id: any) {
    return this.http.put(`${environment.baseurl}/postuler/archiver/${id}`, {});
  }

  addPostuler(postule:any){
    return this.http.post(`${environment.baseurl}/postuler/ajouter`,postule)
   }

  detailPostuler(id: any) {
    return this.http.get(`${environment.baseurl}/postuler/affichagebyid/${id}`);
  }

  updatePostuler(id: any, postule: any) {
    return this.http.put(`${environment.baseurl}/postuler/modification/${id}`,postule);
  }

}

