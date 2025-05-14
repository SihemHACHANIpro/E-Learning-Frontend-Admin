import { Component, OnInit } from '@angular/core';
import { SpecialiteService } from 'src/app/services/specialite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-specialite',
  templateUrl: './list-specialite.component.html',
  styleUrls: ['./list-specialite.component.css']
})
export class ListSpecialiteComponent implements OnInit{
listspecialite: any;
constructor(private specialiteService: SpecialiteService){}

  ngOnInit(): void {
    console.log("Spécialité")
    this.getAllSpecialite();

}

getAllSpecialite(){
  this.specialiteService.getAllSpecilite().subscribe((res:any)=>{
    this.listspecialite=res;
    console.log("list session" , this.listspecialite);
  })
}


deleteSpecialite(id: any) {
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
            this.specialiteService.deleteSpecialite(id).subscribe((res: any) => {
              console.log("res delete", res);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              }).then(() => {
                this.getAllSpecialite();
              });
            });
          }
        });
      }


      archiveSpecialite(id:any){

            this.specialiteService.archiveSpecialite(id).subscribe((res: any) => {
                console.log("res.archiveSpecialite",res);


              })
              Swal.fire({
                 icon: 'success',
                 title: 'Spécialité archivée avec succès',
                 showConfirmButton: false,
                 timer: 1500
              }).then(()=>{
                this.getAllSpecialite();
              });
              }

}
