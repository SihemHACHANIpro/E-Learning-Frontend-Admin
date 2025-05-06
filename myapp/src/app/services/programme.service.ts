import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment.development';

@Injectable({
  providedIn: 'root'
})
export class ProgrammeService {


  constructor(private http:HttpClient) { }



  getAllProgramme(){
      return this.http.get( `${environment.baseurl}/programme/aficherall` )
     }


      // Supprimer une formation
    deleteProgramme(id: any) {
      return this.http.delete(`${environment.baseurl}/programme/supprimer/${id}`);
    }



   detailProgramme(id: any){
    return this.http.get(`${environment.baseurl}/programme/affichagebyid/${id}`)
  }


updeteProgramme(id:any,programme:any){
  return this.http.put(`${environment.baseurl}/programme/modification/${id}`,programme)
}

}
