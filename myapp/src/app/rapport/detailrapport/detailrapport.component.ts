import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { RapportService } from 'src/app/services/rapport.service';

@Component({
  selector: 'app-detailrapport',
  templateUrl: './detailrapport.component.html',
  styleUrls: ['./detailrapport.component.css']
})
export class DetailrapportComponent implements OnInit {
  id:any;
  rapport:any;
  constructor(private activeroute: ActivatedRoute,private rapportService: RapportService ){

  }

  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params['id'];
    console.log("id rapport:", this.id);

    this.getoneRapport(); // <--- ajoute cet appel
  }

  getoneRapport(): void {
    this.rapportService.detailRapport(this.id).subscribe(
     (res: any) => {
      console.log("Détails rapport:", res);
      this.rapport = res;
      }
    );
  }
}
