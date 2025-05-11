import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updaterapport',
  templateUrl: './updaterapport.component.html',
  styleUrls: ['./updaterapport.component.css']
})
export class UpdaterapportComponent implements OnInit {

  id: any;
  rapport: any;
  rapportform!: FormGroup;

  constructor(
    private activeroute: ActivatedRoute,
    private rapportService: RapportService,
    private formbuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.rapportform = this.formbuilder.group({
      daterapport: ['', Validators.required],
      competences: ['', Validators.required],
      formationsuivie: ['', Validators.required],
      score: ['', Validators.required],
      archive: ['', Validators.required],
    });

    this.id = this.activeroute.snapshot.params['id'];
    console.log("id rapport:", this.id);

    this.getoneRapport();
  }

  getoneRapport(): void {
    this.rapportService.detailRapport(this.id).subscribe((res: any) => {
      console.log("Détails rapport:", res);
      this.rapport = res;
      this.rapportform.patchValue({
        daterapport: this.rapport.daterapport,
        competences: this.rapport.competences,
        formationsuivie: this.rapport.formationsuivie,
        score: this.rapport.score,
        archive: this.rapport.archive,
      });
    });
  }

  updateRapport(): void {
    this.rapportService.updateRapport(this.id, this.rapportform.value).subscribe((res: any) => {
      console.log("Rapport mis à jour avec succès", res);
      Swal.fire("Rapport mis à jour avec succès !");
      this.rapport = res;
      this.route.navigateByUrl("/detailrapport");
    });
  }
}
