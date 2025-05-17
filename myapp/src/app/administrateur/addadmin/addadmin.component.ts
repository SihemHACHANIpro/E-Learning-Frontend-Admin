import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AdministrateurService } from 'src/app/services/administrateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addadmin',
  templateUrl: './addadmin.component.html',
  styleUrls: ['./addadmin.component.css']
})
export class AddadminComponent implements OnInit{
  adminform!:any;

  constructor(private  formbuilder: FormBuilder,
     private route: Router,private administrateurService: AdministrateurService
   ){}

  ngOnInit(): void {
    this.adminform=this.formbuilder.group({
      type: ['', Validators.required],
      archive: [false, Validators.required], // ✅ par défaut false pour un nouveau formateur
      nom: ['', Validators.required],
      prenom: ['', Validators.required],
      email: ['', [Validators.required, Validators.email]],
      motDePass: ['', Validators.required],
      role: ['Administrateur'] // optionnel si toujours "formateur"

    })
  }


  addAdmin(){

     this. administrateurService.addAmin(this.adminform.value).subscribe((res:any)=>{
     console.log("res..addAdmin",res)

  })

  Swal.fire({
    icon: 'success',
    title: 'Administrateur ajoutée avec succès',
    showConfirmButton: false,
    timer: 1500
  }).then(() => {
    this.route.navigateByUrl('/list-administrateur');
  });
  }}



