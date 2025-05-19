import { Component, OnInit } from '@angular/core';
import { CertificatService } from 'src/app/services/certificat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listcertificat',
  templateUrl: './listcertificat.component.html',
  styleUrls: ['./listcertificat.component.css']
})
export class ListcertificatComponent  implements OnInit{
listcertificat:any
constructor( private certificatService: CertificatService){}


  ngOnInit(): void {
    console.log("list Certificat")
    this.getAllCertificat()
  }

  getAllCertificat() {
    this.certificatService.getAllCertificat().subscribe((res: any) => {
      this.listcertificat = res;
      console.log("Liste des certificat", this.listcertificat);
    });
  }


  deleteCertificat(id: any) {
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
          this.certificatService. deleteCertificat(id).subscribe({
            next: (res: any) => {
              console.log("res delete", res);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              }).then(() => {
                this.getAllCertificat();
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

    archiveCertificat(id: any) {
      this.certificatService.archiveCertificat(id).subscribe((res: any) => {
        console.log("res.  deleteEvenement", res);
      });
      Swal.fire({
        icon: 'success',
        title: 'Certificat archivée avec succès',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.getAllCertificat();
      });
    }

}


/* import { Component, OnInit } from '@angular/core';
';


constructor(private evenementService: EvenementService ){}


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







 */
