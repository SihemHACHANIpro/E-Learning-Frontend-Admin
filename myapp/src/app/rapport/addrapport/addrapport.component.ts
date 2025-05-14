import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { RapportService } from 'src/app/services/rapport.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addrapport',
  templateUrl: './addrapport.component.html',
  styleUrls: ['./addrapport.component.css']
})
export class AddrapportComponent implements OnInit {
     rapportform!: FormGroup;

     constructor(private route: Router,
          private rapportService: RapportService,
          private formbuilder: FormBuilder){}


  ngOnInit(): void {
    /* this.projetfreelanceform = this.formbuilder.group({
         title: ['', Validators.required], */
         this.rapportform=this.formbuilder.group({
          daterapport  : ['', Validators.required],
          competences : ['', Validators.required],
          formationsuivie  : ['', Validators.required],
          score  : ['', Validators.required],
          archive  : ['', Validators.required],

         })
  }

addRapport(){
    this.rapportService.addRapport(this.rapportform.value).subscribe((res:any)=>{
    console.log("res.addProjet",res) })

Swal.fire({
   icon: 'success',
   title: 'Rapport ajoutée avec succès',
   showConfirmButton: false,
   timer: 1500
}).then(() => {
   this.route.navigateByUrl('/listrapport');
});
}}

