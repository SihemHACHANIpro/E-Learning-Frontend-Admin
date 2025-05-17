import { Component, OnInit } from '@angular/core';
import { ChefdeprojetService } from 'src/app/services/chefdeprojet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listchefdeprojet',
  templateUrl: './listchefdeprojet.component.html',
  styleUrls: ['./listchefdeprojet.component.css']
})
export class ListchefdeprojetComponent implements OnInit {
listchefdeprojet:any

constructor(private chefdeprojetSevice: ChefdeprojetService){}

  ngOnInit(): void {
    console.log("list des chef")
    this.getAllChefdeprojet()

  }
  getAllChefdeprojet(){
    this.chefdeprojetSevice.getAllChefdeproje().subscribe((res:any)=>{
      this.listchefdeprojet=res
      console.log("list formateur",this.listchefdeprojet)
    })

  }

  deleteChefdeprojet(id: any) {
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
        this.chefdeprojetSevice. deleteChefdeprojet(id).subscribe((res: any) => {
         console.log("res delete", res);
        Swal.fire({
         title: "Deleted!",
         text: "Your file has been deleted.",
         icon: "success"
         }).then(() => {
            this.getAllChefdeprojet();
         });
       });
      }
    });
  }


  archiveChefdeprojet(id:any){

    this.chefdeprojetSevice.archiveChefdeprojet(id).subscribe((res: any) => {
        console.log("res.rchiveChefdeprojet",res);


      })
      Swal.fire({
         icon: 'success',
         title: 'Chef de projet archivée avec succès',
         showConfirmButton: false,
         timer: 1500
      }).then(()=>{
        this.getAllChefdeprojet();
      });
      }

    }



