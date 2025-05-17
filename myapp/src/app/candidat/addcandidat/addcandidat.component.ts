import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from 'src/app/services/candidat.service';
import Swal from 'sweetalert2';


@Component({
  selector: 'app-addcandidat',
  templateUrl: './addcandidat.component.html',
  styleUrls: ['./addcandidat.component.css']
})
export class AddcandidatComponent implements OnInit {

candidatform!:FormGroup;

constructor(private candidatSevice: CandidatService,
  private activeroute: ActivatedRoute,
  private  formbuilder: FormBuilder,
  private route:Router
){

}

  ngOnInit(): void {
    this.candidatform= this.formbuilder.group({
      CIN:['',Validators.required],
      archive:['',Validators.required],
      prenom:['',Validators.required],
      nom:['',Validators.required],
      email:['',Validators.required],
      motDePass:['',Validators.required],
      role:['Candidat',Validators.required],
    })

  }

 addCandidat(): void {
  this.candidatSevice.addCandidat(this.candidatform.value).subscribe({
    next: (res: any) => {
      console.log("res.addCandidat",res)
      Swal.fire({
        icon: 'success',
        title: 'candidat ajouté avec succès',
        showConfirmButton: false,
        timer: 1500
      }).then(() => {
        this.route.navigateByUrl('/listcandidat');
      });
    }
  });
}

 }


/* import { Component, OnInit } from '@angular/core';
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

 */


