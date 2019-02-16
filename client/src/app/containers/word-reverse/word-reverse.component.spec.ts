import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { WordReverseComponent } from './word-reverse.component';

describe('WordReverseComponent', () => {
  let component: WordReverseComponent;
  let fixture: ComponentFixture<WordReverseComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordReverseComponent]
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
