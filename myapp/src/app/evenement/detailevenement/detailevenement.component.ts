import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { EvenementService } from 'src/app/services/evenement.service';

@Component({
  selector: 'app-detailevenement',
  templateUrl: './detailevenement.component.html',
  styleUrls: ['./detailevenement.component.css']
})

export class DetailevenementComponent implements OnInit{

  id:any;
  evenement: any;



  constructor(
    private activeroute: ActivatedRoute,
    private evenementService: EvenementService,

  ) {}

  ngOnInit(): void {

    this.id = this.activeroute.snapshot.params['id'];
    console.log("ID Evenement:", this.id);
    this.getoneEvenement()

  }

  getoneEvenement(){
    this.evenementService.detailEvenement(this.id).subscribe((res:any)=>{
      console.log("Détails Evenement:", res)
      this.evenement=res;
    })
   }


  }






