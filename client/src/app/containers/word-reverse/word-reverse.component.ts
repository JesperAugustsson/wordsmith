import { Component } from '@angular/core';
import { Observable } from 'rxjs';

import { ReverseService } from '../../services';
import { ReverseResponse } from '../../models';

@Component({
  selector: 'app-word-reverse',
  templateUrl: './word-reverse.component.html',
  styleUrls: ['./word-reverse.component.scss']
})
export class WordReverseComponent {
  public inputValue: string = '';
  public result$: Observable<ReverseResponse>;

  constructor(private readonly reverseService: ReverseService) { }

  get isDisabled(): boolean {
    return this.inputValue.trim().length < 1;
  }

  public submitSentence(): void {
    if (!this.isDisabled) {
      this.result$ = this.reverseService.reverseSentence(this.inputValue);
      this.inputValue = '';
    }
  }
}
