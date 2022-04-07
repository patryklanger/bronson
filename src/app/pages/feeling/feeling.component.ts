import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-feeling',
  templateUrl: './feeling.component.html',
  styleUrls: ['./feeling.component.scss'],
})
export class FeelingComponent implements OnInit {
  @Output() goDownEvent = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
}
