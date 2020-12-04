import { Component, OnInit } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { BiblesService } from '../services/bibles.service';

@Component({
  selector: 'app-chapter',
  templateUrl: './chapter.component.html',
  styleUrls: ['./chapter.component.css']
})
export class ChapterComponent implements OnInit {

  chapters: any;

  constructor(
    private bibleService: BiblesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getChapters();
  }

  getChapters() {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.bibleService.getChapter(params['bibleId'], params['bookId'])}))
        .subscribe( chapters => {
          this.chapters = chapters;
          console.log(this.chapters);
        })
  }

}
