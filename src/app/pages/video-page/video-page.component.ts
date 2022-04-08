import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';

@Component({
  selector: 'app-video-page',
  templateUrl: './video-page.component.html',
  styleUrls: ['./video-page.component.scss'],
})
export class VideoPageComponent implements OnInit {
  playPauseText = 'play';
  playState = false;
  clientWidth = 0;
  @ViewChild('video', { read: ElementRef }) video: ElementRef | undefined;
  constructor() {
    this.clientWidth = window.innerWidth;
  }

  playClicked() {
    this.playState = !this.playState;
    this.playState
      ? (this.playPauseText = 'pause')
      : (this.playPauseText = 'play');
    this.video!.nativeElement.muted = !this.playState;
    this.video?.nativeElement.classList.toggle('active');
  }

  ngOnInit(): void {}

  ngAfterViewInit() {
    this.video!.nativeElement.muted = true;
  }
}
