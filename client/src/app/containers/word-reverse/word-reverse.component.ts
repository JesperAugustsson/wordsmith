import { Component, OnDestroy } from '@angular/core';
import { Subscription } from 'rxjs';

import { ReverseService } from '../../services';
import { ReverseResponse } from '../../models';

@Component({
  selector: 'app-word-reverse',
  templateUrl: './word-reverse.component.html',
  styleUrls: ['./word-reverse.component.scss'],
})
export class WordReverseComponent implements OnDestroy {
  public inputValue = '';
  public history: ReverseResponse[] = [];
  public result: ReverseResponse;

  private _subscription: Subscription = new Subscription();

  constructor(private readonly reverseService: ReverseService) { }

  ngOnDestroy() {
    this._subscription.unsubscribe();
  }

  get isDisabled(): boolean {
    return this.inputValue.trim().length < 1;
  }

  public submitSentence(): void {
    if (!this.isDisabled) {
      this._subscription.add(
        this.reverseService.reverseSentence(this.inputValue)
          .subscribe(value => {
            this.result = value;
            this.history.unshift(value);
          }),
      );
      this.inputValue = '';
    }
  }
}
