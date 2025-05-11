import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PlanificationService } from 'src/app/services/planification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-update-planification',
  templateUrl: './update-planification.component.html',
  styleUrls: ['./update-planification.component.css']
})
export class UpdatePlanificationComponent implements OnInit {

  id: any;
  planification: any;
  planificationform!: FormGroup;

  constructor(
    private activeroute: ActivatedRoute,
    private planificationService: PlanificationService,
    private formbuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.planificationform = this.formbuilder.group({
      date: ['', Validators.required],
      description: ['', Validators.required],
      archive: ['', Validators.required],
    });

    this.id = this.activeroute.snapshot.params['id'];
    console.log("ID Planification:", this.id);
    this.getonePlanification();
  }

  getonePlanification() {
    this.planificationService.detailPlanification(this.id).subscribe((res: any) => {
      console.log("Détails Planification:", res);
      this.planification = res; 
      this.planificationform.patchValue({
        date: this.planification.date,
        description: this.planification.description,
        archive: this.planification.archive
      });
    });
  }

  UpdatePlanification() {
    this.planificationService.UpdatePlanification(this.id, this.planificationform.value).subscribe((res: any) => {
      console.log("Programme mis à jour avec succès", res);
      Swal.fire("Programme mis à jour avec succès !");
      this.planification = res;
      this.route.navigateByUrl("/detailsprogramme");
    });
  }
}
