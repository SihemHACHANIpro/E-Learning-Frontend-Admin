import { Component, OnInit } from '@angular/core';
import { ProgrammeService } from 'src/app/services/programme.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-listprogramme',
  templateUrl: './listprogramme.component.html',
  styleUrls: ['./listprogramme.component.css']
})
export class ListprogrammeComponent implements OnInit {

  listProgramme: any;

  constructor(private programmeService: ProgrammeService) {}

  ngOnInit(): void {
    console.log("bonjour");
    this.getAllProgramme();
  }

  getAllProgramme() {
    this.programmeService.getAllProgramme().subscribe((res: any) => {
      this.listProgramme = res;
      console.log("list programme", this.listProgramme);
    });
  }

  deleteProgramme(id: any) {
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
        this.programmeService.deleteProgramme(id).subscribe((res: any) => {
          console.log("res delete", res);
          Swal.fire({
            title: "Deleted!",
            text: "Your file has been deleted.",
            icon: "success"
          }).then(() => {
            this.getAllProgramme();
          });
        });
      }
    });
  }
}
