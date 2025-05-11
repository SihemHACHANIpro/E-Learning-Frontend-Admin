import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProjetfreelanceService } from 'src/app/services/projetfreelance.service';

@Component({
  selector: 'app-detailprojet',
  templateUrl: './detailprojet.component.html',
  styleUrls: ['./detailprojet.component.css']
})
export class DetailprojetComponent implements OnInit {
   id: any;
   projetfreelance: any;

constructor(
   private activeroute: ActivatedRoute,
   private projetfreelanceService: ProjetfreelanceService ){}

ngOnInit(): void {
   this.id = this.activeroute.snapshot.params['id'];
   console.log("id ProjetFreeLance:", this.id);
   this.getoneProjetFreeLance();
  }

getoneProjetFreeLance() {
    this.projetfreelanceService.detailProjetfreelance(this.id).subscribe(
    (res: any) => {
     console.log("Détails formation:", res);
     this.projetfreelance = res;
      }
    );
  }
}
