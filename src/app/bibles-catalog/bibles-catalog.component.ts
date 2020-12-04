import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import {Observable} from 'rxjs';
import { FormControl } from '@angular/forms';
import {debounceTime, distinctUntilChanged, map} from 'rxjs/operators';
import { BiblesService } from '../services/bibles.service';
import { expand } from '../animations/app.animations'

@Component({
  selector: 'app-bibles-catalog',
  templateUrl: './bibles-catalog.component.html',
  styleUrls: ['./bibles-catalog.component.css'],
  animations: [
    expand()
  ]
})
export class BiblesCatalogComponent implements OnInit {

  @ViewChild( 'SearchInput' ) searchInput: ElementRef;

  bibles: any;
  languagesEnglish: any[] = [''];
  languagesLocal: any[] = [''];
  LanguageSelected: any[];

  clickedItem: any;
  queryField: FormControl = new FormControl();
  public model: any;

  constructor(
    private biblesService: BiblesService
  ) { }

  ngOnInit() {
    this.getBibles();
    
  }

  getBibles() {
    this.biblesService.getBibles()
      .subscribe(bibles => {

        this.bibles = bibles;
        console.log('Bibles', this.bibles);

        for(let i=0; i < this.bibles.length; i++) {
          this.languagesEnglish[i] = this.bibles[i].language.name;
          this.languagesLocal[i] = this.bibles[i].language.nameLocal
        }

      })
  }

  getLanguage() {
    let reducer = (accumulator, currentValue) => {
      if (!accumulator.find(obj => obj === currentValue)) {
        accumulator.push(currentValue);
      }
      return accumulator;
    };
    
    let Languages = this.languagesEnglish.concat(this.languagesLocal);
    Languages = Languages.reduce(reducer, []);
    return Languages
  }

  search = (text$: Observable<string>) => 
    text$.pipe(
      debounceTime(200),
      distinctUntilChanged(),
      map(term => term.length < 2 ? []
        : this.getLanguage().filter(v => v.toLowerCase().indexOf(term.toLowerCase()) > -1).slice(0, 10))
    );


    selectedItem(item: any){
      this.clickedItem = item.item;
      let selectedArray = [''];

      for (let i = 0; i< this.bibles.length; i++) {
        if ( this.clickedItem == this.bibles[i].language.name || this.clickedItem == this.bibles[i].language.nameLocal) {
          selectedArray[i] = this.bibles[i];
        }
      }
      selectedArray = selectedArray.filter(value => Object.keys(value).length !== 0);
      this.LanguageSelected = selectedArray;
      console.log(this.LanguageSelected);
    }

}
