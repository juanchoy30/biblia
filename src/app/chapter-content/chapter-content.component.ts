import { Component, OnInit, Input } from '@angular/core';

import { Params, ActivatedRoute } from '@angular/router';
import { switchMap } from 'rxjs/operators';

import { BiblesService } from '../services/bibles.service';

@Component({
  selector: 'app-chapter-content',
  templateUrl: './chapter-content.component.html',
  styleUrls: ['./chapter-content.component.css']
})
export class ChapterContentComponent implements OnInit {


  @Input()
  chapterId: any;
  content: any;

  constructor(
    private bibleService: BiblesService,
    private route: ActivatedRoute
  ) { }

  ngOnInit() {
    this.getChaptersId();
  }

  getChaptersId() {
    this.route.params.pipe(switchMap((params: Params) => {
      return this.bibleService.getChapterId(params['bibleId'], params['ChapterId'])}))
        .subscribe( content => {
          this.content = content;
          console.log(this.content);
        })
  }

}
