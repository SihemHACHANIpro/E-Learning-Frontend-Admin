import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SpecialiteService } from 'src/app/services/specialite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addspecialite',
  templateUrl: './addspecialite.component.html',
  styleUrls: ['./addspecialite.component.css']
})
export class AddspecialiteComponent implements OnInit {


specialiteform!:FormGroup
constructor(private specialiteService: SpecialiteService,
  private formbuilder: FormBuilder,
  private route:Router
){

}

  ngOnInit(): void {
    /* this.programmeform = this.formbuilder.group({
          titre:['',Validators.required], */
          this.specialiteform=this.formbuilder.group({
            nom :['',Validators.required],
            description :['',Validators.required],
            archive   :['',Validators.required],


          })

  }



 addSpecialite(){

          this.specialiteService.addSpecialiye(this.specialiteform.value).subscribe((res:any)=>{
            console.log("res.addSpecialite",res)

          })
    Swal.fire({
      icon: 'success',
      title: 'Specialite ajoutée avec succès',
      showConfirmButton: false,
      timer: 1500
    }).then(() => {
      this.route.navigateByUrl('/list-specialite');
    });
    }
  }





