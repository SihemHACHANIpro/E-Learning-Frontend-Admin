import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})


export class SessionService {

  constructor(private http:HttpClient) { }

getAllSession(){
  return this.http.get(`${environment.baseurl}/session/aficherall` )
}

deleteSession(id: any){
  return this.http.delete(`${environment.baseurl}/session/supprimer/${id}`)
}

detailSession(id: any){
  return this.http.get(`${environment.baseurl}/session/affichagebyid/${id}`)
}

updateSession(id:any,session:any){
  return this.http.put(`${environment.baseurl}/session/modification/${id}`,session)
}

addSession(session:any){
  return this.http.post(`${environment.baseurl}/session/ajouter`,session)
}

 archiveSession(id: any) {
  return this.http.put(`${environment.baseurl}/session/archiver/${id}`, {});
}
 

}
