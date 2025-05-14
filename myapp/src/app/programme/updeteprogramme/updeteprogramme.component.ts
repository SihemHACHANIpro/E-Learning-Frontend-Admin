import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router'; // <-- correction ici : Route → Router
import { ProgrammeService } from 'src/app/services/programme.service';
import Swal from 'sweetalert2';

@Component({
   selector: 'app-updeteprogramme',
   templateUrl: './updeteprogramme.component.html',
   styleUrls: ['./updeteprogramme.component.css']
})

export class UpdeteprogrammeComponent implements OnInit {
     id:any;
     programme: any;
     programmeform!: FormGroup;

constructor(
    private activeroute: ActivatedRoute,
    private programmeService: ProgrammeService,
    private formbuilder: FormBuilder,
    private route: Router  ) {}

ngOnInit(): void {
    this.programmeform = this.formbuilder.group({
      titre: ['', Validators.required],
      contenu: ['', Validators.required],
      archive: ['', Validators.required],
 });

    this.id = this.activeroute.snapshot.params['id'];
    console.log("id programme:", this.id);
    this.getoneProgramme();
  }

 getoneProgramme(): void {
    this.programmeService.detailProgramme(this.id).subscribe(
        (res: any) => {
        console.log("Détails formation:", res);
        this.programme = res;
        this.programmeform.patchValue({
           titre: this.programme.titre,
           contenu: this.programme.contenu,
           archive: this.programme.archive
        });
      }
    );
  }


  updeteProgramme(){
               this.programmeService.updeteProgramme(this.id, this.programmeform.value).subscribe((res:any)=>{
                 console.log("Programme mis a jour avec succés!",res)

                 Swal.fire("Programme  mis à jour avec succès !");
                 this.programme = res;
                 this.route.navigateByUrl("/listprogramme");



               })
             }



}
