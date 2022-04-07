import { Component, EventEmitter, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.scss'],
})
export class NeedsComponent implements OnInit {
  @Output() goDownEvent = new EventEmitter<boolean>();
  constructor() {}

  ngOnInit(): void {}
}
