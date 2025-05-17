import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ChefdeprojetService } from 'src/app/services/chefdeprojet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatechefdeprojrt',
  templateUrl: './updatechefdeprojrt.component.html',
  styleUrls: ['./updatechefdeprojrt.component.css']
})
export class UpdatechefdeprojrtComponent implements OnInit {

  id: any;
  chefdeprojet: any;
  chefdeprojetform!: FormGroup;

  constructor(
    private chefdeprojetservice: ChefdeprojetService,
    private activeroute: ActivatedRoute,
    private route: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this. chefdeprojetform = this.formbuilder.group({
      descriptionProfile: ['', Validators.required],
      archive: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePass: ['', Validators.required],
      role: ['Chef-de-projet', Validators.required]
    });

    this.id = this.activeroute.snapshot.params['id'];
    console.log("ID chefdeprojet:", this.id);
    this. getoneChedrprojet()

  }


  getoneChedrprojet() {
    this.chefdeprojetservice.detailChefdeprojet(this.id).subscribe((res: any) => {
      console.log("Détails chefdeprojet", res);
      this.chefdeprojet = res;

      this.chefdeprojetform.patchValue({
        descriptionProfile: this.chefdeprojet.descriptionProfile,
        archive: this.chefdeprojet.archive,
        nom: this.chefdeprojet.nom,
        prenom: this.chefdeprojet.prenom,
        email: this.chefdeprojet.email,
        motDePass: this.chefdeprojet.motDePass,
        role: this.chefdeprojet.role
      });
    });
  }

  updateChefdeprojet() {
    this.chefdeprojetservice.updateChefdeprojet(this.id, this.chefdeprojetform.value).subscribe((res: any) => {
      console.log("Chefdeprojet mis à jour avec succès", res);
      Swal.fire("Chefdeprojet mis à jour avec succès !");
      this.chefdeprojet = res;
      this.route.navigateByUrl("/listchefdeprojet");
    });
  }

}
/* export class UpdateformateurComponent implements OnInit {



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
 */
