import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormateurService } from 'src/app/services/formateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addformateur',
  templateUrl: './addformateur.component.html',
  styleUrls: ['./addformateur.component.css']
})
export class AddformateurComponent implements OnInit {

  formateurform!: FormGroup;

  constructor(
    private formbuilder: FormBuilder,
    private formateurService: FormateurService, 
    private route: Router
  ) {}

  ngOnInit(): void {
    this.formateurform = this.formbuilder.group({
      specialite: ['', Validators.required],
      archive: [false, Validators.required], // ✅ par défaut false pour un nouveau formateur
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePass: ['', Validators.required],
      role: ['formateur'] // optionnel si toujours "formateur"
    });
  }




    addFormateur(): void {
      this.formateurService.addFormateur(this.formateurform.value).subscribe({
        next: (res: any) => {
          console.log("res addFormateur", res);
          Swal.fire({
            icon: 'success',
            title: 'Formateur ajouté avec succès',
            showConfirmButton: false,
            timer: 1500
          }).then(() => {
            this.route.navigateByUrl('/listformateur');
          });
        }
      });
    }

}

