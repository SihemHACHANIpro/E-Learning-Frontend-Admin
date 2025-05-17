import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ChefdeprojetService } from 'src/app/services/chefdeprojet.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addchefdeprojet',
  templateUrl: './addchefdeprojet.component.html',
  styleUrls: ['./addchefdeprojet.component.css']
})
export class AddchefdeprojetComponent implements OnInit {

  chefdeprojetform!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private chefdeprojetService: ChefdeprojetService,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.chefdeprojetform = this.formbuilder.group({
      descriptionProfile: ['', Validators.required],
      archive: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePass: ['', Validators.required],
      role: ['Chef-de-projet', Validators.required]
    });
  }

  addChefdeprojet(): void {
    if (this.chefdeprojetform.invalid) return;

    this.chefdeprojetService.addChefdeprojet(this.chefdeprojetform.value).subscribe({
      next: (res: any) => {
        console.log('res addChefdeprojet', res);
        Swal.fire({
          icon: 'success',
          title: 'Chef de projet ajouté avec succès',
          showConfirmButton: false,
          timer: 1500
        }).then(() => {
          this.route.navigateByUrl('/listchefdeprojet');
        });
      },
      error: (err) => {
        console.error(err);
        Swal.fire({
          icon: 'error',
          title: 'Erreur',
          text: 'Échec de l’ajout du chef de projet.'
        });
      }
    });
  }
}
