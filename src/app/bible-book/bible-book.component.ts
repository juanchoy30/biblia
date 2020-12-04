import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { BiblesService } from '../services/bibles.service';

@Component({
  selector: 'app-bible-book',
  templateUrl: './bible-book.component.html',
  styleUrls: ['./bible-book.component.css']
})
export class BibleBookComponent implements OnInit {

  books: any;

  constructor(
    private bibleService: BiblesService,
    private route: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.getTheBooks();
  }

  getTheBooks() {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.bibleService.getBooks(params['bibleId'])}))
        .subscribe( books => {
          this.books = books;
          console.log(this.books);
        })
  }

}
