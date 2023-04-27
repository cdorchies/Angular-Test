import { FilterCatsPipe } from './pipes/filter-cats.pipe';
import { NgModule, LOCALE_ID } from '@angular/core';
import { registerLocaleData } from '@angular/common';
import * as fr from '@angular/common/locales/fr';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CatsComponent } from './cats/cats.component';
import { CatsListComponent } from './cats-list/cats-list.component';
import { ContactComponent } from './contact/contact.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LandingPageComponent } from './landing-page/landing-page.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FilterPipe } from './pipes/filter.pipe';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CreateCatAnnonceComponent } from './create-cat-annonce/create-cat-annonce.component';
import { ViewCatComponent } from './view-cat/view-cat.component';

@NgModule({
  declarations: [
    AppComponent,
    CatsComponent,
    CatsListComponent,
    ContactComponent,
    HeaderComponent,
    FooterComponent,
    LandingPageComponent,
    FilterCatsPipe,
    FilterPipe,
    CreateCatAnnonceComponent,
    ViewCatComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
  ],
  providers: [{ provide: LOCALE_ID, useValue: 'fr-FR' }],
  bootstrap: [AppComponent],
})
export class AppModule {
  constructor() {
    registerLocaleData(fr.default);
  }
}
