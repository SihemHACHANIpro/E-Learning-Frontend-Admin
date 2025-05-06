import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';

@Component({
  selector: 'app-detailsession',
  templateUrl: './detailsession.component.html',
  styleUrls: ['./detailsession.component.css']
})
export class DetailsessionComponent  implements OnInit{

  id!: number;
  session: any;
   
  constructor(private activeroute: ActivatedRoute, private sessionService: SessionService){}

  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params['id'];
    console.log("id programme:", this.id);
    this.getoneSession();

  }
  getoneSession(): void {
    this.sessionService.detailSession(this.id).subscribe(
      (res: any) => {
        console.log("Détails formation:", res);
        this.session = res;
      }
    );
  }

}
