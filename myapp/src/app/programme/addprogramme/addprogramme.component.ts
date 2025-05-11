import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { ProgrammeService } from 'src/app/services/programme.service';
import Swal from 'sweetalert2';

@Component({
   selector: 'app-addprogramme',
   templateUrl: './addprogramme.component.html',
   styleUrls: ['./addprogramme.component.css']
})

export class AddprogrammeComponent implements OnInit{
   programmeform!:FormGroup

constructor(
    private formbuilder: FormBuilder,
    private programmeservice: ProgrammeService,
    private route: Router ){}


  ngOnInit(): void {
      this.programmeform = this.formbuilder.group({
      titre:['',Validators.required],
      contenu:['',Validators.required],
      archive:['',Validators.required],
    })
  }

addProgramme(){
    this.programmeservice.addProgramme(this.programmeform.value).subscribe((res:any)=>{
    console.log("res.addProgramme",res)
  })
  Swal.fire({
      icon: 'success',
      title: 'Programme ajoutée avec succès',
      showConfirmButton: false,
      timer: 1500
      }).then(() => {
        this.route.navigateByUrl('/listprogramme');
    });
    }
  }




