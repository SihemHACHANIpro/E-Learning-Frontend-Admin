import { Component, OnInit } from '@angular/core';
import { PlanificationService } from 'src/app/services/planification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-list-planification',
  templateUrl: './list-planification.component.html',
  styleUrls: ['./list-planification.component.css']
})
export class ListPlanificationComponent implements OnInit {

  listplanification: any;

  constructor(private planificationService: PlanificationService) {}

  ngOnInit(): void {
    console.log("Voici liste planification");
    this.getAllPlanification();
  }

  getAllPlanification() {
    this.planificationService.getAllPlanification().subscribe((res: any) => {
      this.listplanification = res;
      console.log("Liste des formations", this.listplanification);
    });
  }

  deletePlanification(id: any) {
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
        this.planificationService.deletePlanification(id).subscribe({
          next: (res: any) => {
            console.log("res delete", res);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }).then(() => {
              this.getAllPlanification();
            });
          },
          error: (err) => {
            console.error("Delete failed", err);
            Swal.fire("Error", "Failed to delete the planification.", "error");
          }
        });
      }
    });
  }


  archivePlanification(id:any){
    this.planificationService.archivePlanification(id).subscribe((res: any) => {
      console.log("res.archivePlanification", res);
    });

    Swal.fire({
      icon: 'success',
      title: 'Planification archivée avec succès',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      this.getAllPlanification();
    });
  }

}

