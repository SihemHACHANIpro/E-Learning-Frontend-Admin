import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { PostulerService } from 'src/app/services/postuler.service';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-updatepostuler',
  templateUrl: './updatepostuler.component.html',
  styleUrls: ['./updatepostuler.component.css']
})
export class UpdatepostulerComponent implements OnInit {
  id: any;
  postuler: any;
  postulerform!: FormGroup;

  constructor(
    private activeroute: ActivatedRoute,
    private postulerService: PostulerService,
    private formbuilder: FormBuilder,
    private route: Router
  ) {}

  ngOnInit(): void {
    this.postulerform = this.formbuilder.group({
      contenu: ['', Validators.required],
      inscrireFreelance: ['', Validators.required],
      archive: ['', Validators.required],
    });

    this.id = this.activeroute.snapshot.params['id'];
    console.log("ID Postuler:", this.id);
    this.getonePostuler();
  }

  getonePostuler() {
    this.postulerService.detailPostuler(this.id).subscribe((res: any) => {
      console.log("Détails Postuler:", res);
      this.postuler = res;
      this.postulerform.patchValue({
        archive: this.postuler.archive,
        inscrireFreelance: this.postuler.inscrireFreelance,
        contenu: this.postuler.contenu,
      });
    });
  }

  updatePostuler() {
    this.postulerService.updatePostuler(this.id, this.postulerform.value).subscribe((res: any) => {
      console.log("Postuler mis à jour avec succès", res);
      Swal.fire("Postuler mis à jour avec succès !");
      this.postuler = res;
      this.route.navigateByUrl("/listpostuler");
    });
  }
}
