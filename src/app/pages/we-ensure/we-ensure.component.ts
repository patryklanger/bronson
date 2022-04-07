import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-we-ensure',
  templateUrl: './we-ensure.component.html',
  styleUrls: ['./we-ensure.component.scss'],
})
export class WeEnsureComponent implements OnInit {
  @Output() goDownEvent = new EventEmitter<boolean>();

  constructor() {}

  ngOnInit(): void {}
}
