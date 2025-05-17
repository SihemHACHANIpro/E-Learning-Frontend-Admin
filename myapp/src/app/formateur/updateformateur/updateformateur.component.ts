import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { FormateurService } from 'src/app/services/formateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateformateur',
  templateUrl: './updateformateur.component.html',
  styleUrls: ['./updateformateur.component.css']
})
export class UpdateformateurComponent implements OnInit {

  id: any;
  formateur: any;
  formateurform!: FormGroup;

  constructor(
    private formateurService: FormateurService,
    private activeroute: ActivatedRoute,
    private route: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.formateurform = this.formbuilder.group({
      specialite: ['', Validators.required],
      archive: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePass: ['', Validators.required]
    });

    this.id = this.activeroute.snapshot.params['id'];
    console.log("ID formateur:", this.id);
    this.getoneFormateur();
  }

  getoneFormateur() {
    this.formateurService.detailFormateur(this.id).subscribe((res: any) => {
      console.log("Détails formateur", res);
      this.formateur = res;

      this.formateurform.patchValue({
        specialite: this.formateur.specialite,
        archive: this.formateur.archive,
        nom: this.formateur.nom,
        prenom: this.formateur.prenom,
        email: this.formateur.email,
        motDePass: this.formateur.motDePass
      });
    });
  }

  updateFormateur() {
    this.formateurService.updateFormateur(this.id, this.formateurform.value).subscribe((res: any) => {
      console.log("Formateur mis à jour avec succès", res);
      Swal.fire("Formateur mis à jour avec succès !");
      this.formateur = res;
      this.route.navigateByUrl("/listformateur");
    });
  }

}
