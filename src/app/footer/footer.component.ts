import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss'],
})
export class FooterComponent implements OnInit {
  userEmail!: string;

  constructor() {}

  ngOnInit(): void {}

  onSubmitForm(form: NgForm): void {
    console.log(form.value);
  }
}
