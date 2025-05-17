import { Component, OnInit } from '@angular/core';
import { FormateurService } from 'src/app/services/formateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listformateur',
  templateUrl: './listformateur.component.html',
  styleUrls: ['./listformateur.component.css']
})
export class ListformateurComponent implements OnInit {
  listformateur:any;


  constructor(private formateurService: FormateurService){}

    ngOnInit(): void {
      console.log("list formateur");
      this.getAllFormateur()

    }

    getAllFormateur(){
      this.formateurService.getAllFormateur().subscribe((res:any)=>{
        this.listformateur=res
        console.log("list formateur",this.listformateur)
      })

    }

    //________________
    deleteFormateur(id: any) {
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
            this.formateurService.deleteFormateur(id).subscribe((res: any) => {
             console.log("res delete", res);
            Swal.fire({
             title: "Deleted!",
             text: "Your file has been deleted.",
             icon: "success"
             }).then(() => {
                this.getAllFormateur();
             });
           });
          }
        });
      }
      //_______________

      archiveFormateur(id:any){

            this.formateurService. archiveFormateur(id).subscribe((res: any) => {
                console.log("res.  archiveFormateu",res);


              })
              Swal.fire({
                 icon: 'success',
                 title: 'Formateur archivée avec succès',
                 showConfirmButton: false,
                 timer: 1500
              }).then(()=>{
                this.getAllFormateur();
              });
              }


            }





