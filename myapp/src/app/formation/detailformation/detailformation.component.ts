import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { FormationService } from 'src/app/services/formation.service';

@Component({
  selector: 'app-detailformation',
  templateUrl: './detailformation.component.html',
  styleUrls: ['./detailformation.component.css']
})
export class DetailformationComponent implements OnInit {
   id!: number;
   formation: any;

constructor(
    private activeroute: ActivatedRoute,
    private formationService: FormationService
 ) {}
ngOnInit(): void {
    this.id = this.activeroute.snapshot.params['id'];
    console.log("ID Formation:", this.id);
    this.getOneFormation();
}

 getOneFormation(): void {
    this.formationService.detailsFormation(this.id).subscribe(
    (res: any) => {
     console.log("Détails formation:", res);
      this.formation = res;
     }
    );
  }
}
