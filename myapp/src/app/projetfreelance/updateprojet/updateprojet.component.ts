import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjetfreelanceService } from 'src/app/services/projetfreelance.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updateprojet',
  templateUrl: './updateprojet.component.html',
  styleUrls: ['./updateprojet.component.css']
})
export class UpdateprojetComponent {


  id: any;
    projetfreelance: any;
    projetfreelanceform!: FormGroup;

    constructor(private activeroute: ActivatedRoute,
      private projetfreelanceService: ProjetfreelanceService,
      private route: Router,
       private formbuilder: FormBuilder
     ){}
    ngOnInit(): void {

this.projetfreelanceform=this.formbuilder.group({
  title: ['', Validators.required],
  description: ['', Validators.required],
  planification: ['', Validators.required],
  statut: ['', Validators.required],
  dateDebut: ['', Validators.required],
  dateFin: ['', Validators.required],
  archive: ['', Validators.required]

})
      this.id = this.activeroute.snapshot.params['id'];
      console.log("id ProjetFreeLance:", this.id);
      this.getoneProjetFreeLance();

    }

    getoneProjetFreeLance(): void {
      this.projetfreelanceService.detailProjetfreelance(this.id).subscribe(
        (res: any) => {
          console.log("Détails formation:", res);
          this.projetfreelance = res;
          this.projetfreelanceform.patchValue({
            title:this.projetfreelance.title,
            description:this.projetfreelance. description,
            planification:this.projetfreelance. planification,
            statut:this.projetfreelance. statut,
            dateDebut:this.projetfreelance. dateDebut,
            dateFin:this.projetfreelance.dateFin,
            archive:this.projetfreelance.archive

          })
        }
      );
    }



    updateProjet(){
                   this.projetfreelanceService. updateProjet(this.id, this.projetfreelanceform.value).subscribe((res:any)=>{
                     console.log("projetfreelance mis a jour avec succés!",res)

                     Swal.fire("projetfreelance  mis à jour avec succès !");
                     this.projetfreelance= res;
                     this.route.navigateByUrl("/listprojet");



                   })
                 }


  }



