import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map, catchError } from 'rxjs/operators';
import { baseURL } from '../shared/baseUrl';
import { apiKey } from '../shared/apiKey';

const httpOptions = {
  headers: new HttpHeaders({
    'accept':  'application/json',
    'api-key': apiKey
  })
};


//const header = new HttpHeaders().set('api-key', apiKey);

@Injectable({
  providedIn: 'root'
})
export class BiblesService {

  bibleURL = `${baseURL}/v1/bibles`;

  constructor(
    private http: HttpClient
  ) { }


  getBibles(): Observable<any> {
    return this.http.get<any>(this.bibleURL, { headers: httpOptions.headers })
      .pipe(map((data:any) => data.data));
  }

  getBooks(bibleId: string): Observable<any> {
    let bookURL = `${this.bibleURL}/${bibleId}/books`;
    return this.http.get<any>(bookURL, { headers: httpOptions.headers })
      .pipe(map((data:any) => data.data));
  }

  getChapter(bibleId: string, bookId: string): Observable<any> {
    let chapterURL = `${this.bibleURL}/${bibleId}/books/${bookId}/chapters`;
    return this.http.get<any>(chapterURL, { headers: httpOptions.headers })
      .pipe(map((data:any) => data.data));
  }

  getChapterId(bibleId: string, chapterId: string): Observable<any> {
    let chapterIdURL = `${this.bibleURL}/${bibleId}/chapters/${chapterId}?content-type=json&include-verse-numbers=true`;
    return this.http.get<any>(chapterIdURL, { headers: httpOptions.headers })
      .pipe(map((data:any) => data.data));
  }
}
