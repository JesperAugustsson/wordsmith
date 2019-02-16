import { Component, Input } from '@angular/core';

import { ReverseResponse } from 'src/app/models';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent {
  @Input() resultItem: ReverseResponse;

  constructor() { }
}
