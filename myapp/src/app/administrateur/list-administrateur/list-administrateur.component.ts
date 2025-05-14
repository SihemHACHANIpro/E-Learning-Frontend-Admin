import { Component, OnInit } from '@angular/core';
import { AdministrateurService } from 'src/app/services/administrateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-administrateur',
  templateUrl: './list-administrateur.component.html',
  styleUrls: ['./list-administrateur.component.css']
})
export class ListAdministrateurComponent  implements OnInit{
listadministrateur:any;

constructor(private administrateurService: AdministrateurService){}

  ngOnInit(): void {
    console.log("Administrateur")
    this.getAllAdministrateur()
  }

  getAllAdministrateur(){
    this.administrateurService.getAllAdministrateur().subscribe((res:any)=>{
      this.listadministrateur=res;
      console.log("list administration",this.listadministrateur)

    })
  }


  deleteAdmin(id: any) {
    Swal.fire({
      title: "Are you sure?",
      text: "You won't be able to revert this!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes, delete it!"
    }).then((result) => {
      if (result.isConfirmed) {
        this.administrateurService.deleteAdmin(id).subscribe((res: any) => {
          console.log("res delete", res);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          }).then(() => {
            this.getAllAdministrateur();
          });
        });
      }
    });
  }

  archiveAdmin(id:any){

    this.administrateurService.archiveAdmin(id).subscribe((res: any) => {
        console.log("res.archiveAdmin",res);


      })
      Swal.fire({
         icon: 'success',
         title: 'Session archivée avec succès',
         showConfirmButton: false,
         timer: 1500
      }).then(()=>{
        this. getAllAdministrateur();
      });
      }




}
