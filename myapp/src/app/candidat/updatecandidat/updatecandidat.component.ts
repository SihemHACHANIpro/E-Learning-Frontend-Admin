import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { CandidatService } from 'src/app/services/candidat.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatecandidat',
  templateUrl: './updatecandidat.component.html',
  styleUrls: ['./updatecandidat.component.css']
})
export class UpdatecandidatComponent implements OnInit {

  id: any;
  candidat: any;
  candidatform!: FormGroup;

  constructor(
    private candidatService: CandidatService,
    private activeroute: ActivatedRoute,
    private route: Router,
    private formbuilder: FormBuilder
  ) {}

  ngOnInit(): void {
    this.candidatform = this.formbuilder.group({
      cin: ['', Validators.required],
      archive: ['', Validators.required],
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePass: ['', Validators.required],
      role: ['candidat', Validators.required]
    });

    this.id = this.activeroute.snapshot.params['id'];
    console.log("ID candidat:", this.id);
    this.getoneCandidat();
  }

  getoneCandidat() {
    this.candidatService.detailCandidat(this.id).subscribe((res: any) => {
      console.log("Détails candidat", res);
      this.candidat = res;

      this.candidatform.patchValue({
        cin: res.cin,
        archive: res.archive,
        nom: res.nom,
        prenom: res.prenom,
        email: res.email,
        motDePass: res.motDePass,
        role: res.role
      });
    });
  }

  updateCandidat() {
    this.candidatService.updateCandidat(this.id, this.candidatform.value).subscribe((res: any) => {
      console.log("Candidat mis à jour avec succès", res);
      Swal.fire("Succès", "Candidat mis à jour avec succès !", "success");
      this.route.navigateByUrl("/listcandidat");
    });
  }
}
