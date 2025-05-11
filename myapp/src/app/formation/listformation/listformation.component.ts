import { Component, OnInit } from '@angular/core';
import { FormationService } from 'src/app/services/formation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listformation',
  templateUrl: './listformation.component.html',
  styleUrls: ['./listformation.component.css']
})
export class ListformationComponent implements OnInit {
  listFormation: any;

constructor(private formationService: FormationService) {}

ngOnInit(): void {
   console.log("Voici liste formation");
   this.getAllFormation();
}

// Cette méthode récupère la liste des formations
 getAllFormation() {
      this.formationService.getAllFormation().subscribe((res: any) => {
      this.listFormation = res;
      console.log("Liste des formations", this.listFormation);
    });
  }

deleteFormation(id: any) {
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
        this.formationService.deleteFormation(id).subscribe((res: any) => {
         console.log("res delete", res);
        Swal.fire({
         title: "Deleted!",
         text: "Your file has been deleted.",
         icon: "success"
         }).then(() => {
            this.getAllFormation();
         });
       });
      }
    });
  }
}
