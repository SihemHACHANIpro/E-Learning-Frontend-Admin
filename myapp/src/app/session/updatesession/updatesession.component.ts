import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { SessionService } from 'src/app/services/session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatesession',
  templateUrl: './updatesession.component.html',
  styleUrls: ['./updatesession.component.css']
})
export class UpdatesessionComponent {

  id!: number;
  session: any;
  sessionform!:FormGroup;

    constructor(private activeroute: ActivatedRoute,
       private sessionService: SessionService,
       private formbuilder: FormBuilder,
       private route: Router){}

    ngOnInit(): void {
            this.sessionform=this.formbuilder.group({
              dateSession:['', Validators.required],
              lieu:['', Validators.required],
              statut:['', Validators.required],
              archive:['', Validators.required],

            })
      this.id = this.activeroute.snapshot.params['id'];
      console.log("id programme:", this.id);
      this.getoneSession();

    }
    getoneSession(): void {
      this.sessionService.detailSession(this.id).subscribe(
        (res: any) => {
          console.log("Détails formation:", res);
          this.session = res;

        this.sessionform.patchValue({
          dateSession:this.session.dateSession,
          lieu:this.session.lieu,
          statut:this.session.statut,
          archive:this.session.archive

        })

        }
      );
    }


       /*  updateSession(){
          this.sessionService.updateSession(this.id,this.sessionform.value).subscribe((res:any)=>{
            console.log("Session mis à jour avec succès", res);
            Swal.fire("Session mis à jour avec succès !");
            this.session = res;
            this.route.navigateByUrl("/listsession'");

          })
        } */

          updateSession(){
              this.sessionService. updateSession(this.id, this.sessionform.value).subscribe((res:any)=>{
                console.log("formation mis a jour avec succés!",res)

                Swal.fire("formation mis à jour avec succès !");
                this.session = res;
                this.route.navigateByUrl("/listsession");



              })

}}
