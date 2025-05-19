import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { EvenementService } from 'src/app/services/evenement.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-addevenement',
  templateUrl: './addevenement.component.html',
  styleUrls: ['./addevenement.component.css']
})
export class AddevenementComponent implements OnInit {
 evenementform!:FormGroup

 constructor(private formbuilder: FormBuilder,
  private route: Router,
  private evenementService: EvenementService

 ){}

  ngOnInit(): void {
    this.evenementform=this.formbuilder.group({
      titre: ['', Validators.required],
      archive: [false, Validators.required], // ✅ par défaut false pour un nouveau formateur
      lieu: ['', Validators.required],
      description: ['', Validators.required],
      dateEvenement: ['', Validators.required],
  })

}

addEvenement(){

  this.evenementService.addEvenement(this.evenementform.value).subscribe((res:any)=>{
  console.log("res.addEvenement",res)

})

Swal.fire({
 icon: 'success',
 title: 'Evenement ajoutée avec succès',
 showConfirmButton: false,
 timer: 1500
}).then(() => {
 this.route.navigateByUrl('/listevenement');
});
}
}









