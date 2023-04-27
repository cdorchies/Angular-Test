// import { Router } from '@angular/router';
// import { CatService } from './../services/cats-list.service';
import { Cat } from './../models/cat.model';
import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { map, Observable } from 'rxjs';

@Component({
  selector: 'app-create-cat-annonce',
  templateUrl: './create-cat-annonce.component.html',
  styleUrls: ['./create-cat-annonce.component.scss'],
})
export class CreateCatAnnonceComponent implements OnInit {
  catForm!: FormGroup;
  // APPELER LE MODEL ICI \/
  catFormPreview$!: Observable<Cat>;
  // IMAGE PAR DEFAULT
  defaultCatPic: string =
    'https://i.pinimg.com/736x/2a/4d/11/2a4d11d5d32c83812d2e07742578835c.jpg';

  // REGEX
  urlRegex!: RegExp;

  constructor(
    private formBuilder: FormBuilder // private catService: CatService,
  ) // private route: Router
  {}

  ngOnInit(): void {
    this.urlRegex =
      /(http(s)?:\/\/.)?(www\.)?[-a-zA-Z0-9@:%._+~#=]{2,256}\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_+.~#?&/=]*)/;
    this.catForm = this.formBuilder.group(
      {
        // FORMULAIRE REACTIF
        name: [null, [Validators.required]],
        sex: [null, [Validators.required]],
        age: [null, [Validators.required]],
        imageUrl: [
          null,
          [Validators.required, Validators.pattern(this.urlRegex)],
        ],
        type: [null, [Validators.required]],
        description: [null, [Validators.required]],
        sterilized: [null, [Validators.required]],
        location: [null],
        association: [null],
      },
      {
        updateOn: 'blur',
      }
    );

    this.catFormPreview$ = this.catForm.valueChanges.pipe(
      map((formValue) => ({
        ...formValue,
        id: 0,
        like: 0,
        isAdopted: false,
      }))
    );
  }

  onSubmitForm(): void {
    console.log(this.catForm.value);
    // this.catService.addCat(this.catForm.value);
    // this.route.navigateByUrl('/nos-chats');
  }
}
