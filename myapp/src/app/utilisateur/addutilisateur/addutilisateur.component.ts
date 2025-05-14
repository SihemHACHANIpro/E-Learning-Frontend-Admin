import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addutilisateur',
  templateUrl: './addutilisateur.component.html',
  styleUrls: ['./addutilisateur.component.css']
})
export class AddutilisateurComponent implements OnInit {

utilisateurform!:any;
constructor(private utilisateurService:UtilisateurService,
  private formbuilder: FormBuilder,
  private route:Router
){}

  ngOnInit(): void {

          this.utilisateurform=this.formbuilder.group({
             nom: ['', Validators.required],
                  prenom: ['', Validators.required],
                  email: ['', Validators.required],
                  motDePass: ['', Validators.required],
                  role: ['', Validators.required],
                  archive: ['', Validators.required],

          })

  }

   addUtilisateur(){

            this.utilisateurService.addUtilisateur(this.utilisateurform.value).subscribe((res:any)=>{
              console.log("res.addUtilisateur",res)

            })
      Swal.fire({
        icon: 'success',
        title: 'Utilisateur ajoutée avec succès',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.route.navigateByUrl('/listutilisateur');
      });
      }

}
