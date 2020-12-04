import { Routes } from '@angular/router';
import { BiblesCatalogComponent } from '../bibles-catalog/bibles-catalog.component';
import { BibleBookComponent } from '../bible-book/bible-book.component';
import { ChapterComponent } from '../chapter/chapter.component';
import { ChapterContentComponent } from '../chapter-content/chapter-content.component';

export const routes: Routes = [
    { path: 'bibles-catalog', component: BiblesCatalogComponent },
    { path: 'bible/:bibleId/bible-books', component: BibleBookComponent },
    { path: 'bible-books/:bibleId/book/:bookId', component: ChapterComponent },
    { path: 'bible-book/:bibleId/chapter/:ChapterId', component: ChapterContentComponent},
    { path: '', redirectTo: '/bibles-catalog', pathMatch: 'full' }
];