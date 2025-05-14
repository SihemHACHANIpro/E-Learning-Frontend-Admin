import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { AdministrateurService } from 'src/app/services/administrateur.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateadmin',
  templateUrl: './updateadmin.component.html',
  styleUrls: ['./updateadmin.component.css']
})
export class UpdateadminComponent implements OnInit {
id:any;
administrateur:any;
adminform!:FormGroup


constructor(private activeroute: ActivatedRoute,
  private formbuilder:FormBuilder,
  private route: Router,
  private administratrurService: AdministrateurService){}

  ngOnInit(): void {
this.adminform=this.formbuilder.group({
  type:['',Validators.required],
  archive:['',Validators.required]

})

      this.id=this.activeroute.snapshot.params['id'];
      console.log("Id administrateur;",this.id)
      this.getoneAdmin()

  }

  getoneAdmin(){
    this.administratrurService.detailsAdmin(this.id).subscribe((res:any)=>{
      console.log("Détails administrateur:", res);
      this.administrateur=res;
      this.adminform.patchValue({
       type:this.administrateur.type ,
       archive:this.administrateur.archive ,

  })



    })
  }

  UpdateAdmin() {
     this.administratrurService.updateAdmin(this.id, this.adminform.value).subscribe((res: any) => {
       console.log("Administrateur mis à jour avec succès", res);
       Swal.fire("Administrateur mis à jour avec succès !");
       this.administrateur = res;
       this.route.navigateByUrl("/list-administrateur");
     });
   }



}
