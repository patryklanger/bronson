import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { MainPageDirective } from '../directive/one-page/main-page.directive';
import { FeelingDirective } from '../directive/one-page/feeling.directive';
import { AppNeedsDirective } from '../directive/one-page/app-needs.directive';
import { WeEnsureDirective } from '../directive/one-page/we-ensure.directive';
import { StartWithUsDirective } from '../directive/one-page/start-with-us.directive';
import { Router } from '@angular/router';
import { VideoDirective } from '../directive/one-page/video.directive';
import { polyfill } from 'seamless-scroll-polyfill';

@Component({
  selector: 'app-one-page-scroll',
  templateUrl: './one-page-scroll.component.html',
  styleUrls: ['./one-page-scroll.component.scss'],
})
export class OnePageScrollComponent implements OnInit {
  @ViewChild(MainPageDirective, { read: ElementRef }) mainPageComponent:
    | ElementRef
    | undefined;
  @ViewChild(VideoDirective, { read: ElementRef }) videoComponent:
    | ElementRef
    | undefined;
  @ViewChild(FeelingDirective, { read: ElementRef }) feelingComponent:
    | ElementRef
    | undefined;
  @ViewChild(AppNeedsDirective, { read: ElementRef }) needsComponent:
    | ElementRef
    | undefined;
  @ViewChild(WeEnsureDirective, { read: ElementRef }) weEnsureComponent:
    | ElementRef
    | undefined;
  @ViewChild(StartWithUsDirective, { read: ElementRef }) startWithUs:
    | ElementRef
    | undefined;
  requestedPath = '';
  constructor(private router: Router) {
    this.requestedPath = router.url;
  }

  scrollToElementByUrl(url: string) {
    console.log(url);
    switch (url) {
      case '/main':
        this.mainPageComponent?.nativeElement.scrollIntoView({
          block: 'start',
        });
        break;
      case '/our-clip':
        this.videoComponent?.nativeElement.scrollIntoView({ block: 'start' });
        break;
      case '/feeling':
        this.feelingComponent?.nativeElement.scrollIntoView({ block: 'start' });
        break;
      case '/we-ensure':
        this.weEnsureComponent?.nativeElement.scrollIntoView({
          block: 'start',
        });
        break;
      case '/needs':
        this.needsComponent?.nativeElement.scrollIntoView({ block: 'start' });
        break;
      case '/start-with-us':
        this.startWithUs?.nativeElement.scrollIntoView({ block: 'start' });
        break;
      default:
        this.mainPageComponent?.nativeElement.scrollIntoView({
          block: 'start',
        });
        break;
    }
  }
  scrollTo(element: string) {
    switch (element) {
      case 'main':
        break;
      case 'feeling':
        this.feelingComponent?.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      case 'our-clip':
        this.videoComponent?.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      case 'ensure':
        this.weEnsureComponent?.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      case 'needs':
        this.needsComponent?.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
        break;
      case 'start-with':
        this.startWithUs?.nativeElement.scrollIntoView({
          behavior: 'smooth',
        });
        break;
    }
  }
  ngOnInit(): void {}
  ngAfterViewInit() {
    polyfill();
    setTimeout(this.scrollToElementByUrl.bind(this, this.requestedPath), 200);
  }
}
