import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { SpecialiteService } from 'src/app/services/specialite.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatespecialite',
  templateUrl: './updatespecialite.component.html',
  styleUrls: ['./updatespecialite.component.css']
})
export class UpdatespecialiteComponent {


   id!: any;
  specialite: any;
  specialiteform!:FormGroup

    constructor(private activeroute: ActivatedRoute,
       private specialiteService: SpecialiteService,
       private formbuilder: FormBuilder,
       private route: Router
      ){}


    ngOnInit(): void {

      this.id = this.activeroute.snapshot.params['id'];
      console.log("id spcialite:", this.id);
      this.getoneSpecialite()
      this.specialiteform=this.formbuilder.group({
        nom:['', Validators.required],
        description :['', Validators.required],
        archive:['', Validators.required],

      })



    }

    getoneSpecialite(): void {
      this.specialiteService.detailSpecialite(this.id).subscribe(
        (res: any) => {
          console.log("Détails Specialité:", res);
          this.specialite = res;


        this.specialiteform.patchValue({
          nom:this.specialite.nom,
          description:this.specialite.description,
          archive:this.specialite.archive,
        }
      );
    }
  )}


   updateSpecialite(){
            this.specialiteService.updateSpecialite(this.id,this.specialiteform.value).subscribe((res:any)=>{
              console.log("Specialite mis à jour avec succès", res);
              Swal.fire("Specialite mis à jour avec succès !");
              this.specialite = res;
              this.route.navigateByUrl("/detailsession");

            })
          }

      }
