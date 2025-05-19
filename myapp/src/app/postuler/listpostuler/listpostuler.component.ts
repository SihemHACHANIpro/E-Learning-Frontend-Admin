import { Component, OnInit } from '@angular/core';
import { PostulerService } from 'src/app/services/postuler.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listpostuler',
  templateUrl: './listpostuler.component.html',
  styleUrls: ['./listpostuler.component.css']
})
export class ListpostulerComponent implements OnInit {

listpostuler:any;

constructor(private postulerService: PostulerService ){}
  ngOnInit(): void {
    console.log("Voici liste postuler");
    this.getAllPostuler()

  }
  getAllPostuler() {
    this.postulerService.getAllPostuler().subscribe((res: any) => {
      this.listpostuler = res;
      console.log("Liste des formations", this.listpostuler);
    });
  }


  deletePostuler(id: any) {
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
        this.postulerService.deletePostuler(id).subscribe({
          next: (res: any) => {
            console.log("res delete", res);
            Swal.fire({
              title: "Deleted!",
              text: "Your file has been deleted.",
              icon: "success"
            }).then(() => {
              this.getAllPostuler();
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

  archivePostuler(id: any) {
    this.postulerService.  archivePostuler(id).subscribe((res: any) => {
      console.log("res.  archivePostuler", res);
    });
    Swal.fire({
      icon: 'success',
      title: 'Postuler archivée avec succès',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      this.getAllPostuler();
    });
  }

}
/* listevenement:any




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







 */
