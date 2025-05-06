import { Component, OnInit } from '@angular/core';
import { SpecialiteService } from 'src/app/services/specialite.service';

@Component({
  selector: 'app-list-specialite',
  templateUrl: './list-specialite.component.html',
  styleUrls: ['./list-specialite.component.css']
})
export class ListSpecialiteComponent implements OnInit{
listspecialite: any;
constructor(private specialiteService: SpecialiteService){}

  ngOnInit(): void {
    console.log("Spécialité")
    this.getAllSpecialite();



}

getAllSpecialite(){
  this.specialiteService.getAllSpecilite().subscribe((res:any)=>{
    this.listspecialite=res;
    console.log("list session" , this.listspecialite);
  })
}
}
