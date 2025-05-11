import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ProgrammeService } from 'src/app/services/programme.service';
import Swal from 'sweetalert2';

@Component({
   selector: 'app-listprogramme',
   templateUrl: './listprogramme.component.html',
   styleUrls: ['./listprogramme.component.css']
})

export class ListprogrammeComponent implements OnInit {
    listProgramme: any;
    listarchive:any;
    id:any;
    programme: any;

constructor(private programmeService: ProgrammeService,
  private route: Router,
) {}

ngOnInit(): void {
    console.log("bonjour");
    this.getAllProgramme();
  }

 getAllProgramme() {
      this.programmeService.getAllProgramme().subscribe((res: any) => {
      this.listProgramme = res;
      console.log("list programme", this.listProgramme);
    });
  }

  archiveProgramme(id:any){

      this.programmeService.archiveProgramme(id).subscribe((res: any) => {
          console.log("res.archiveProgramme",res);


        })
        Swal.fire({
           icon: 'success',
           title: 'Formation ajoutée avec succès',
           showConfirmButton: false,
           timer: 1500
        }).then(()=>{
          this.getAllProgramme();
        });
        }


deleteProgramme(id: any) {
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
        this.programmeService.deleteProgramme(id).subscribe((res: any) => {
        console.log("res delete", res);
        Swal.fire({
        title: "Deleted!",
        text: "Your file has been deleted.",
        icon: "success"
      }).then(() => {
            this.getAllProgramme();
          });
        });
      }
    });
  }
}
function deleteProgramme(id: any, any: any) {
  throw new Error('Function not implemented.');
}

