import { Cat } from './../models/cat.model';
import { Router } from '@angular/router';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-cats',
  templateUrl: './cats.component.html',
  styleUrls: ['./cats.component.scss'],
})
export class CatsComponent implements OnInit {
  constructor(private router: Router) {}
  @Input() cat!: Cat;

  ngOnInit(): void {}

  viewCat() {
    this.router.navigateByUrl(`nos-chats/${this.cat.id}`);
  }
}
