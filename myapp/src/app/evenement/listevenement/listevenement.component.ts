import { Component, OnInit } from '@angular/core';
import { EvenementService } from 'src/app/services/evenement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listevenement',
  templateUrl: './listevenement.component.html',
  styleUrls: ['./listevenement.component.css']

})

export class ListevenementComponent implements OnInit{
listevenement:any

constructor(private evenementService: EvenementService ){}

  ngOnInit(): void {
    console.log("Voici liste evenement");
    this.getAllEvenement();

  }

  getAllEvenement() {
    this.evenementService.getAllEvenement().subscribe((res: any) => {
      this.listevenement = res;
      console.log("Liste des formations", this.listevenement);
    });
  }


  deleteEvenement(id: any) {
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
        this.evenementService.deleteEvenement(id).subscribe({
          next: (res: any) => {
            console.log("res delete", res);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }).then(() => {
              this.getAllEvenement();
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


  archiveEvenement(id: any) {
      this.evenementService.archiveEvenement(id).subscribe((res: any) => {
        console.log("res.  deleteEvenement", res);
      });
      Swal.fire({
        icon: 'success',
        title: 'Evenement archivée avec succès',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.getAllEvenement();
      });
    }


}







