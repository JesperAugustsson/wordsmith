import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClient } from '@angular/common/http';
import { of } from 'rxjs';

import { WordReverseComponent } from './word-reverse.component';
import { ReverseService } from '../../services';

describe('WordReverseComponent', () => {
  let component: WordReverseComponent;
  let fixture: ComponentFixture<WordReverseComponent>;
  let reverseService: ReverseService;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [WordReverseComponent],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      imports: [FormsModule],
      providers: [
        HttpClient,
        {
          provide: ReverseService,
          useValue: {
            reverseSentence: () => { },
          }
        },
      ],
    })
      .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(WordReverseComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();

    reverseService = TestBed.get(ReverseService);
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('isDisabled', () => {
    it('should return true if inputValue is empty', () => {
      component.inputValue = '';

      expect(component.isDisabled).toBe(true);
    });

    it('should return false if inputValue is not empty', () => {
      component.inputValue = 'Foo Bar';

      expect(component.isDisabled).toBe(false);
    });
  });

  describe('submitSentence', () => {
    it('should not call service if isDisabled is true', () => {
      spyOn(reverseService, 'reverseSentence');
      component.inputValue = '';

      component.submitSentence();
      expect(reverseService.reverseSentence).not.toHaveBeenCalled();
      expect(component.result$).toBeUndefined();
    });

    it('should call service and reset inputValue', () => {
      const expected$ = of({
        original: 'Foo bar',
        result: 'ooF rab',
        timestamp: 123,
      });
      spyOn(reverseService, 'reverseSentence').and.returnValue(expected$);
      component.inputValue = 'Foo bar';

      component.submitSentence();
      expect(reverseService.reverseSentence).toHaveBeenCalledWith('Foo bar');
      expect(component.result$).toEqual(expected$);
      expect(component.inputValue).toBe('');
    });
  });
});
