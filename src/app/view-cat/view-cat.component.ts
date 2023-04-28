import { Observable } from 'rxjs';
import { Cat } from './../models/cat.model';
import { CatService } from './../services/cats-list.service';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-view-cat',
  templateUrl: './view-cat.component.html',
  styleUrls: ['./view-cat.component.scss'],
})
export class ViewCatComponent implements OnInit {
  cat$!: Observable<Cat>;

  constructor(private catService: CatService, private route: ActivatedRoute) {}

  ngOnInit() {
    // Permet d'obtenir l'id de la route actuelle
    const theCat = +this.route.snapshot.params['id'];
    // Le $ de this.cat$ signifie que c'est un type Observable
    this.cat$ = this.catService.getCatByID(theCat);
  }
}
