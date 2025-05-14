import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { AdministrateurService } from 'src/app/services/administrateur.service';

@Component({
  selector: 'app-detailsadmin',
  templateUrl: './detailsadmin.component.html',
  styleUrls: ['./detailsadmin.component.css']
})
export class DetailsadminComponent  implements OnInit{
id:any;
administrateur:any
constructor( private administratrurService: AdministrateurService,
  private activeroute: ActivatedRoute){}

  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params['id'];
    console.log("ID administrateur:", this.id);

  }

  getOneFormation(): void {
    this.administrateur.detailsAdmin(this.id).subscribe(
    (res: any) => {
     console.log("Détails administrateur:", res);
      this.administrateur = res;
     }
    );
  }
}



/*
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
 */
