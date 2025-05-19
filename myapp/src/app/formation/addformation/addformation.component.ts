import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addformation',
  templateUrl: './addformation.component.html',
  styleUrls: ['./addformation.component.css']
})
export class AddformationComponent implements OnInit {

  formationform!:FormGroup;

  constructor(private  formbuilder: FormBuilder,
    private route: Router,
    private  formationService: FormationService
  ){

  }

  ngOnInit(): void {
    this.formationform = this.formbuilder.group({
      title:['',Validators.required],
      description:['',Validators.required],
       categorie :['',Validators.required],
       duree: ['' ,Validators.required],
       dateDebut:['',Validators.required],
       dateFin:['',Validators.required],
       statut:['',Validators.required],
       archive :['',Validators.required]

    })

  }

  addFormation(){

    this.formationService.addFormation(this.formationform.value).subscribe((res:any)=>{
    console.log("res.addFormation",res)

 })

 Swal.fire({
  icon: 'success',
  title: 'Formation ajoutée avec succès',
  showConfirmButton: false,
  timer: 1500
}).then(() => {
  this.route.navigateByUrl('/listformation');
});
}


}

  /* formationform!:FormGroup

constructor(private  formbuilder: FormBuilder,
   private formationService: FormationService,
   private route: Router){}

 ngOnInit(): void {
    this.formationform = this.formbuilder.group({
       title:['',Validators.required],
       description:['',Validators.required],
       categorie :['',Validators.required],
       duree: ['' ,Validators.required],
       dateDebut:['',Validators.required],
       dateFin:['',Validators.required],
       statut:['',Validators.required],
       archive :['',Validators.required]
    })
  }

addFormation(){

   this.formationService.addFormation(this.formationform.value).subscribe((res:any)=>{
   console.log("res.addFormation",res)

})

Swal.fire({
  icon: 'success',
  title: 'Formation ajoutée avec succès',
  showConfirmButton: false,
  timer: 1500
}).then(() => {
  this.route.navigateByUrl('/listformation');
});
}


}
 */
