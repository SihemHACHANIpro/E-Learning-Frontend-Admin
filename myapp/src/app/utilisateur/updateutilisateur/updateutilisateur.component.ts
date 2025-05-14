import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateutilisateur',
  templateUrl: './updateutilisateur.component.html',
  styleUrls: ['./updateutilisateur.component.css']
})
export class UpdateutilisateurComponent implements OnInit {

  id: any;
  utilisateur: any;
  utilisateurform!: FormGroup;

  constructor(
    private utilisateurService: UtilisateurService,
    private activeroute: ActivatedRoute,
    private formbuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params['id'];
    console.log("id utilisateur:", this.id);
    this.getoneUtilisateur();

    this.utilisateurform = this.formbuilder.group({
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', Validators.required],
      motDePass: ['', Validators.required],
      role: ['', Validators.required],
      archive: ['', Validators.required],
    });
  }

  getoneUtilisateur(): void {
    this.utilisateurService.detailUtilisateur(this.id).subscribe(
      (res: any) => {
        console.log("Détails Utilisateur:", res);
        this.utilisateur = res;

        this.utilisateurform.patchValue({
          nom: this.utilisateur.nom,
          prenom: this.utilisateur.prenom,
          email: this.utilisateur.email,
          motDePass: this.utilisateur.motDePass,
          role: this.utilisateur.role,
          archive: this.utilisateur.archive
        });
      }
    );
  }

  updateUtilisateur(): void {
    this.utilisateurService.updateUtilisateur(this.id, this.utilisateurform.value).subscribe(
      (res: any) => {
        console.log("Utilisateur mis à jour avec succès !", res);
        Swal.fire("Utilisateur mis à jour avec succès !");
        this.utilisateur = res;
        this.route.navigateByUrl("/listutilisateur");
      }
    );
  }

}
