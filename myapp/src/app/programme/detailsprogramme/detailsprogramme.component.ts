import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ProgrammeService } from 'src/app/services/programme.service';

@Component({
  selector: 'app-detailsprogramme',
  templateUrl: './detailsprogramme.component.html',
  styleUrls: ['./detailsprogramme.component.css']
})
export class DetailsprogrammeComponent implements OnInit {

  id!: number;
  programme: any;

  constructor(private activeroute: ActivatedRoute, private programmeService: ProgrammeService) {}

  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params['id'];
    console.log("id programme:", this.id);
    this.getoneProgramme(); // appel réactivé ici
  }

  getoneProgramme(): void {
    this.programmeService.detailProgramme(this.id).subscribe(
      (res: any) => {
        console.log("Détails formation:", res);
        this.programme = res;
      }
    );
  }


   
}
