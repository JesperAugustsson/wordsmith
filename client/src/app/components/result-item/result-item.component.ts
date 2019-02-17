import {
  animate,
  keyframes,
  state,
  style,
  transition,
  trigger,
} from '@angular/animations';
import { Component, Input } from '@angular/core';

import { ReverseResponse } from 'src/app/models';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss'],
  animations: [
    trigger('newItem', [
      state('void', style({ opacity: '0' })),

      transition('void => show', [
        animate(
          '1s cubic-bezier(0.23, 1, 0.32, 1)',
          keyframes([
            style({ opacity: '0', transform: 'translateY(-10vh)' }),
            style({ opacity: '1', transform: 'translateY(0)' }),
          ]),
        )
      ]),
    ]),
  ],
})
export class ResultItemComponent {
  @Input() resultItem: ReverseResponse;
  @Input() animate: string;

  constructor() { }
}
