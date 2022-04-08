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
    if (this.playState == true) this.video?.nativeElement.play();
  }
  onVideoStateChange(event: Event) {
    if (event.type == 'play') {
      this.playState = true;
      this.playPauseText = 'pause';
      this.video?.nativeElement.classList.add('active');
    } else if (event.type == 'pause') {
      this.playState = false;
      this.playPauseText = 'play';
      this.video?.nativeElement.classList.remove('active');
    }
  }
  ngOnInit(): void {}

  ngAfterViewInit() {
    this.video!.nativeElement.muted = true;
  }
}
