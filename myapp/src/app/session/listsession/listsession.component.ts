import { Component, OnInit } from '@angular/core';
import { SessionService } from 'src/app/services/session.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listsession',
  templateUrl: './listsession.component.html',
  styleUrls: ['./listsession.component.css']
})
export class ListsessionComponent implements OnInit {

  listSession: any;


  constructor(private sessionService: SessionService){}


  ngOnInit(): void {
    console.log("Session")
    this.getAllSession()
  }


    getAllSession(){
      this.sessionService.getAllSession().subscribe((res:any)=>{
        this.listSession=res;
        console.log("list session" , this.listSession);
      })
    }


     deleteSession(id: any) {
        Swal.fire({
          title: "Are you sure?",
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yes, delete it!"
        }).then((result) => {
          if (result.isConfirmed) {
            this.sessionService.deleteSession(id).subscribe((res: any) => {
              console.log("res delete", res);
              Swal.fire({
                title: "Deleted!",
                text: "Your file has been deleted.",
                icon: "success"
              }).then(() => {
                this.getAllSession();
              });
            });
          }
        });
      }


      archiveSession(id:any){

                this.sessionService.archiveSession(id).subscribe((res: any) => {
                    console.log("res.archiveSession",res);


                  })
                  Swal.fire({
                     icon: 'success',
                     title: 'Session archivée avec succès',
                     showConfirmButton: false,
                     timer: 1500
                  }).then(()=>{
                    this.getAllSession();
                  });
                  }


}
