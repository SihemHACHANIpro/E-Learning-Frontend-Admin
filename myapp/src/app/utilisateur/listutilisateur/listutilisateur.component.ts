import { Component, OnInit } from '@angular/core';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listutilisateur',
  templateUrl: './listutilisateur.component.html',
  styleUrls: ['./listutilisateur.component.css']
})
export class ListutilisateurComponent implements OnInit {
  listutilisateur: any;

  constructor(private utilisateurService: UtilisateurService) {}

  ngOnInit(): void {
    console.log("Utilisateur");
    this.getAllUtilisateur();
  }

  getAllUtilisateur() {
    this.utilisateurService.getAllUtilisateur().subscribe((res: any) => {
      this.listutilisateur = res;
      console.log("list utilisateur", this.listutilisateur);
    });
  }








  /* deleteUtilisateur(id: any) {
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
        this.utilisateurService.deleteUtilisateur(id).subscribe((res: any) => {
          console.log("res delete", res);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          }).then(() => {
          this.getAllUtilisateur();
          });
        });
      }
    });
  }
 */
  archiveUtilisateur(id: any) {
    this.utilisateurService.archiveUtilisateur(id).subscribe((res: any) => {
      console.log("res.archiveUtilisateur", res);
    });

    Swal.fire({
      icon: 'success',
      title: 'Session archivée avec succès',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      this.getAllUtilisateur();
    });
  }

  deleteUtilisateur(id: any) {
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
            this.utilisateurService.deleteUtilisateur(id).subscribe((res: any) => {
              console.log("res delete", res);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              }).then(() => {
                this. getAllUtilisateur();
              });
            });
          }
        });
      }



}
