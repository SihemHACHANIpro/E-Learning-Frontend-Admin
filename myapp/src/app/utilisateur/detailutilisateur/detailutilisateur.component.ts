import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { UtilisateurService } from 'src/app/services/utilisateur.service';

@Component({
  selector: 'app-detailutilisateur',
  templateUrl: './detailutilisateur.component.html',
  styleUrls: ['./detailutilisateur.component.css']
})
export class DetailutilisateurComponent implements OnInit {

  id: any;
  utilisateur: any;

  constructor(
    private utilisateurService: UtilisateurService,
    private activeroute: ActivatedRoute
  ) {}

  ngOnInit(): void {
    this.id = this.activeroute.snapshot.params['id'];
    console.log("id utilisateur:", this.id);
    this.getoneUtilisateur();
  }

  getoneUtilisateur(): void {
    this.utilisateurService.detailUtilisateur(this.id).subscribe(
      (res: any) => {
        console.log("Détails Utilisateur:", res);
        this.utilisateur = res;
      }
    );
  }

}
