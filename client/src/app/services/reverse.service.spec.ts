import { TestBed } from '@angular/core/testing';
import { HttpClient } from '@angular/common/http';
import { cold } from 'jasmine-marbles';

import { environment } from '../../environments/environment';

import { ReverseService } from './reverse.service';

describe('ReverseService', () => {
  let http: HttpClient;
  let service: ReverseService;
  const api = `${environment.apiBase}reverse`;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [
        ReverseService,
        {
          provide: HttpClient,
          useValue: {
            post: () => { },
          }
        },
      ],
    });

    service = TestBed.get(ReverseService);
    http = TestBed.get(HttpClient);
  });

  it('should call http.post when reverseSentence is called', () => {
    spyOn(http, 'post').and.returnValue(cold('a|', { a: {} }));

    expect(service.reverseSentence('Foo bar')).toBeObservable(cold('a|', { a: {} }));
    expect(http.post).toHaveBeenCalledWith(api, 'Foo bar');
  });
});
