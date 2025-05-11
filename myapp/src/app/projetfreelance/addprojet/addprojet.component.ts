import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProjetfreelanceService } from 'src/app/services/projetfreelance.service';
import Swal from 'sweetalert2';

 @Component({
     selector: 'app-addprojet',
     templateUrl: './addprojet.component.html',
     styleUrls: ['./addprojet.component.css']
           })

export class AddprojetComponent implements OnInit {
     projetfreelanceform!: FormGroup;
     constructor(private route: Router,
     private projetfreelanceService: ProjetfreelanceService,
     private formbuilder: FormBuilder){}

ngOnInit(): void {
  this.projetfreelanceform = this.formbuilder.group({
     title: ['', Validators.required],
     description: ['', Validators.required],
     planification: ['', Validators.required],
     statut: ['', Validators.required],
     dateDebut: ['', Validators.required],
     dateFin: ['', Validators.required],
     archive: ['', Validators.required]
    });
  }

 addProjet(){
    this.projetfreelanceService.addProjet(this.projetfreelanceform.value).subscribe((res:any)=>{
    console.log("res.addProjet",res) })

Swal.fire({
   icon: 'success',
   title: 'Formation ajoutée avec succès',
   showConfirmButton: false,
   timer: 1500
}).then(() => {
   this.route.navigateByUrl('/listprojet');
});
}}
