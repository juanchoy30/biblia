import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { BiblesCatalogComponent } from './bibles-catalog.component';

describe('BiblesCatalogComponent', () => {
  let component: BiblesCatalogComponent;
  let fixture: ComponentFixture<BiblesCatalogComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ BiblesCatalogComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(BiblesCatalogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
