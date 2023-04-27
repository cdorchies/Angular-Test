import { Router } from '@angular/router';
import { Observable } from 'rxjs';
import { Cat } from './../models/cat.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class CatService {
  constructor(private httpService: HttpClient, private router: Router) {}
  catsUrl: string = 'assets/datas/cats.json';
  cats: Cat[] = [];

  getCats(): Observable<Cat[]> {
    return this.httpService.get<Cat[]>(this.catsUrl);
  }

  getCatByID(id: number): Observable<Cat> {
    return this.httpService.get<Cat>(this.catsUrl + '/' + id);
  }


  // ADD A CAT ====> ON CREATE-CAT-ANNONCE

  //   addCat(catForm: {
  //     name: string;
  //     sex: string;
  //     age: number;
  //     imageUrl: string;
  //     type: string;
  //     description: string;
  //     sterilized: boolean;
  //     location?: string;
  //     association?: string;
  //   }): void {
  //     const addCat: Cat = {
  //       ...catForm,
  //       isAdopted: false,
  //       likes: 0,
  //       id: this.getCats([this.cats.length - 1]).id + 1,
  //       // id: this.cats[this.cats.length - 1].id + 1,
  //     };
  //     this.getCats.push(addCat);
  //   }
}
