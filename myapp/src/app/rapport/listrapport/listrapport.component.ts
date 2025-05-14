import { Component, OnInit } from '@angular/core';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listrapport',
  templateUrl: './listrapport.component.html',
  styleUrls: ['./listrapport.component.css']
})
export class ListrapportComponent implements OnInit {

listrapport:any
constructor(private rapportService: RapportService){}

ngOnInit(): void {
    console.log("list Rapport")
    this.getAllRapport()
  }

 getAllRapport(){
      this.rapportService.getAllRapport().subscribe((res:any)=>{
      this.listrapport=res
      console.log("liste des rapport",this.listrapport)
    })
  }
 archiveRapport(id:any){

      this.rapportService.archiveRapport(id).subscribe((res: any) => {
          console.log("res.archiveRapport",res);


        })
        Swal.fire({
           icon: 'success',
           title: 'Rapport archivée avec succès',
           showConfirmButton: false,
           timer: 1500
        }).then(()=>{
          this.getAllRapport();
        });
        }




  deleteRapport(id: any) {
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
          this.rapportService.deleteRapport(id).subscribe({
            next: (res: any) => {
              console.log("res delete", res);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              }).then(() => {
                this.getAllRapport();
              });
            }

          });
        }
      });
    }


}
