import { Observable } from 'rxjs';
import { Cat } from './../models/cat.model';
import { Router } from '@angular/router';
import { CatService } from './../services/cats-list.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cats-list',
  templateUrl: './cats-list.component.html',
  styleUrls: ['./cats-list.component.scss'],
})
export class CatsListComponent implements OnInit {
  filteredCats = '';

  cats!: Cat[];
  cats$!: Observable<Cat[]>;

  constructor(private catService: CatService, private router: Router) {}

  ngOnInit(): void {
    this.cats$ = this.catService.getCats();
  }

  viewCat(catId: number) {
    this.router.navigateByUrl(`nos-chats/${catId}`);
  }
  // onViewCat() {
  //   this.router.navigateByUrl(`nos-chats/?ID=${this.cat.id}`);
  // }

  // ngOnInit(): void {                   // FETCH METHODE
  //   fetch('./assets/datas/cats.json')
  //     .then((res) => res.json())
  //     .then((jsonData) => {
  //       this.cats = jsonData;
  //     });
  // }

  // ngOnInit() {
  //   this.catService.getCats().subscribe((data) => {
  //     this.cats = data;
  //   });
  // }
}

// ngOnInit() {
//   this.catService.getCats()
//   };
