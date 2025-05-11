import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { PlanificationService } from 'src/app/services/planification.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addplanification',
  templateUrl: './addplanification.component.html',
  styleUrls: ['./addplanification.component.css']
})
export class AddplanificationComponent implements OnInit {
  planificationform!: FormGroup;

  constructor(
    private planificationService: PlanificationService,
    private formbuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.planificationform = this.formbuilder.group({
      date: ['', Validators.required],
      description: ['', Validators.required],
      archive: ['', Validators.required]
    });
  }

  addPlanification() {
    this.planificationService.addPlanification(this.planificationform.value).subscribe((res: any) => {
      console.log("res. addPlanification", res);
    });

    Swal.fire({
      icon: 'success',
      title: 'Planification ajoutée avec succès',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      this.route.navigateByUrl('/list-planification');
    });
  }
}
