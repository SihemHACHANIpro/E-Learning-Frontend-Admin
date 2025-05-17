import { Component, OnInit } from '@angular/core';
import { CandidatService } from 'src/app/services/candidat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listcandidat',
  templateUrl: './listcandidat.component.html',
  styleUrls: ['./listcandidat.component.css']
})
export class ListcandidatComponent implements OnInit {
  listcandidat:any;

  constructor(private candidateService: CandidatService){}


  ngOnInit(): void {
    console.log("les candidat");
    this.getAllCandidat()

  }

  getAllCandidat(){

this.candidateService.getAllCandidat().subscribe((res:any)=>{
  this.listcandidat=res;
  console.log("list candidat",this.listcandidat)
})
  }


   deleteCandidat(id: any) {
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
              this.candidateService.deleteCandidat(id).subscribe((res: any) => {
               console.log("res delete", res);
              Swal.fire({
               title: "Deleted!",
               text: "Your file has been deleted.",
               icon: "success"
               }).then(() => {
                  this.getAllCandidat();
               });
             });
            }
          });
        }



        archiveCandidat(id:any){

          this.candidateService.archiveCandidat(id).subscribe((res: any) => {
              console.log("res.archiveCandidat",res);


            })
            Swal.fire({
               icon: 'success',
               title: 'Candidat archivée avec succès',
               showConfirmButton: false,
               timer: 1500
            }).then(()=>{
              this.getAllCandidat();
            });
            }



}

