import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { PlanificationService } from 'src/app/services/planification.service';

@Component({
  selector: 'app-detail-planification',
  templateUrl: './detail-planification.component.html',
  styleUrls: ['./detail-planification.component.css']
})
export class DetailPlanificationComponent  implements OnInit{

  id: any;
  planification: any;

  constructor(private activeroute: ActivatedRoute, private planificationService: PlanificationService  ){}

  ngOnInit(): void {

    this.id=this.activeroute.snapshot.params['id'];
    console.log("ID Planification:",this.id)
    this.getonePlanification()

  }

 getonePlanification(){
  this.planificationService.detailPlanification(this.id).subscribe((res:any)=>{
    console.log("Détails Planification:", res)
    this.planification=res;
  })
 }

}
