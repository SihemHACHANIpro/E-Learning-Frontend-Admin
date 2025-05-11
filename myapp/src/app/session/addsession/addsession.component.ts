import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addsession',
  templateUrl: './addsession.component.html',
  styleUrls: ['./addsession.component.css']
})
export class AddsessionComponent implements OnInit {


sessionform!:FormGroup

constructor(private formbuilder: FormBuilder,
  private sessionService:SessionService,
     private route: Router
){}

  ngOnInit(): void {

    this.sessionform=this.formbuilder.group({
      dateSession:['',Validators.required],
      lieu :['',Validators.required],
      statut :['',Validators.required],
      archive  :['',Validators.required],

    })

  }

addSession(){

      this.sessionService.addSession(this.sessionform.value).subscribe((res:any)=>{
        console.log("res.addSession",res)

      })
Swal.fire({
  icon: 'success',
  title: 'Formation ajoutée avec succès',
  showConfirmButton: false,
  timer: 1500
}).then(() => {
  this.route.navigateByUrl('/listsession');
});
}}

