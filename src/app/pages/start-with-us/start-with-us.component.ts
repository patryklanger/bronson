import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-start-with-us',
  templateUrl: './start-with-us.component.html',
  styleUrls: ['./start-with-us.component.scss'],
})
export class StartWithUsComponent implements OnInit {
  constructor(public router: Router) {}

  ngOnInit(): void {}
}
