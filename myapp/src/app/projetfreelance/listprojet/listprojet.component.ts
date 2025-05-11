import { Component, OnInit } from '@angular/core';
import { ProjetfreelanceService } from 'src/app/services/projetfreelance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listprojet',
  templateUrl: './listprojet.component.html',
  styleUrls: ['./listprojet.component.css']
})
export class ListprojetComponent implements OnInit {

listProjet:any;
constructor(private projetfreeclaneService: ProjetfreelanceService){}

  ngOnInit(): void {
   console.log("List projet freelance")
   this.getAllProjetfreelance()
  }


  getAllProjetfreelance() {
    this.projetfreeclaneService.getAllProjetfreelance().subscribe((res: any) => {
      this.listProjet = res;
      console.log("list projetFreelance", this.listProjet);
    });
  }

  deleteProjetfreelance(id: any) {
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
          this.projetfreeclaneService.deleteProjetfreelance(id).subscribe((res: any) => {
            console.log("res delete", res);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }).then(() => {
              this.getAllProjetfreelance();
            });
          });
        }
      });
    }

}
