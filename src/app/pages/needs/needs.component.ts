import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-needs',
  templateUrl: './needs.component.html',
  styleUrls: ['./needs.component.scss'],
})
export class NeedsComponent implements OnInit {
  @Output() goDownEvent = new EventEmitter<boolean>();
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
