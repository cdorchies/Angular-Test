import { CreateCatAnnonceComponent } from './create-cat-annonce/create-cat-annonce.component';
import { CatsComponent } from './cats/cats.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ViewCatComponent } from './view-cat/view-cat.component';

const routes: Routes = [
  { path: '', component: LandingPageComponent },
  { path: 'nos-chats', component: CatsComponent },
  { path: 'nos-chats/:id', component: ViewCatComponent },
  { path: 'creation-annonce', component: CreateCatAnnonceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
