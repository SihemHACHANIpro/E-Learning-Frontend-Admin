import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SpecialiteService } from 'src/app/services/specialite.service';

@Component({
  selector: 'app-detail-specialite',
  templateUrl: './detail-specialite.component.html',
  styleUrls: ['./detail-specialite.component.css']
})
export class DetailSpecialiteComponent implements OnInit {
  id!: any;
  specialite: any;

  constructor(private activeroute: ActivatedRoute,
     private specialiteService: SpecialiteService){}


  ngOnInit(): void {
    
    this.id = this.activeroute.snapshot.params['id'];
    console.log("id spcialite:", this.id);
    this.getoneSpecialite()

  }

  getoneSpecialite(): void {
    this.specialiteService.detailSpecialite(this.id).subscribe(
      (res: any) => {
        console.log("Détails Specialité:", res);
        this.specialite = res;
      }
    );
  }

}
