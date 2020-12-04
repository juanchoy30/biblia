import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { NgbModule, NgbTypeaheadModule } from '@ng-bootstrap/ng-bootstrap';

import { AppComponent } from './app.component';

import { BiblesService } from './services/bibles.service';
import { BiblesCatalogComponent } from './bibles-catalog/bibles-catalog.component';

import { AppRoutingModule } from './app-routing/app-routing.module';
import { BibleBookComponent } from './bible-book/bible-book.component';
import { ChapterComponent } from './chapter/chapter.component';
import { ChapterContentComponent } from './chapter-content/chapter-content.component';
import { NavbarComponent } from './navbar/navbar.component';

@NgModule({
  declarations: [
    AppComponent,
    BiblesCatalogComponent,
    BibleBookComponent,
    ChapterComponent,
    ChapterContentComponent,
    NavbarComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    HttpModule,
    HttpClientModule,
    AppRoutingModule,
    NgbModule,
    NgbTypeaheadModule,
    FormsModule
  ],
  providers: [
    BiblesService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
