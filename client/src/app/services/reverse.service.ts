import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { ReverseResponse } from '../models';

import { environment } from '../../environments/environment';

@Injectable()
export class ReverseService {
  private readonly url = `${environment.apiBase}reverse`;

  reverseSentence(sentence: string) {
    return this.http.post<ReverseResponse>(this.url, sentence);
  }

  constructor(private readonly http: HttpClient) { }
}
