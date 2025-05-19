import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from 'src/app/services/evenement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateevenement',
  templateUrl: './updateevenement.component.html',
  styleUrls: ['./updateevenement.component.css']
})
export class UpdateevenementComponent implements OnInit {
  id: any;
  evenement: any;
  evenementform!: FormGroup;

  constructor(
    private activeroute: ActivatedRoute,
    private evenementService: EvenementService,
    private formbuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.evenementform = this.formbuilder.group({
      titre: ['', Validators.required],
      dateEvenement: ['', Validators.required],
      lieu: ['', Validators.required],
      description: ['', Validators.required],
      archive: ['', Validators.required],
    });

    this.id = this.activeroute.snapshot.params['id'];
    console.log("ID Evenement:", this.id);
    this.getoneEvenement();
  }

  getoneEvenement() {
    this.evenementService.detailEvenement(this.id).subscribe((res: any) => {
      console.log("Détails Evenement:", res);
      this.evenement = res;
      this.evenementform.patchValue({
        titre: this.evenement.titre,
        dateEvenement: this.evenement.dateEvenement,
        lieu: this.evenement.lieu,
        description: this.evenement.description,
        archive: this.evenement.archive
      });
    });
  }

  updateEvenement() {
    this.evenementService.updateEvenement(this.id, this.evenementform.value).subscribe((res: any) => {
      console.log("Evenement mis à jour avec succès", res);
      Swal.fire("Programme mis à jour avec succès !");
      this.evenement = res;
      this.route.navigateByUrl("/listevenement");
    });
  }
}
