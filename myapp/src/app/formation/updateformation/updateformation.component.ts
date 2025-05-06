import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-updateformation',
  templateUrl: './updateformation.component.html',
  styleUrls: ['./updateformation.component.css']
})
export class UpdateformationComponent {

   id!: number;
    formation: any;
    formationform!:FormGroup

     constructor(
      private activeroute: ActivatedRoute,
      private formationService: FormationService,private formbuilder:FormBuilder
    ) {}

    ngOnInit(): void {

   this.formationform=this.formbuilder.group({
    title:['',Validators.required],
    description:['',Validators.required],
    categorie :['',Validators.required],
    duree: [0, Validators.required],    // ✅ 0 au lieu de ''
    dateDebut:['',Validators.required],
    dateFin:['',Validators.required],
    statut:['',Validators.required],
    archive :['',Validators.required]



   })
      this.id = this.activeroute.snapshot.params['id'];
      console.log("ID Formation:", this.id);
      this.getOneFormation();
    }

    getOneFormation(): void {
      this.formationService.detailsFormation(this.id).subscribe(
        (res: any) => {
          console.log("Détails formation:", res);
          this.formation = res;

      this.formationform.patchValue({
        title:this.formation.title,
        description:this.formation.description,
        categorie:this.formation.categorie,
        duree:this.formation. duree,
        dateDebut: this.formation.dateDebut?.substring(0, 10),  // ✅ Format YYYY-MM-DD
        dateFin: this.formation.dateFin?.substring(0, 10),
        statut:this.formation. statut,
        archive:this.formation. archive,


      })
        },

      );
    }
    updateFormation(){
      this.formationService.updateFormation(this.id, this.formationform.value).subscribe((res:any)=>{
        console.log("formation mis a jour avec succés!",res)
        this.formation = res;
      })
    }

}
