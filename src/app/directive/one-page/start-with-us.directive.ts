import { Directive, ElementRef, HostListener } from '@angular/core';
import { Location } from '@angular/common';

@Directive({
  selector: '[appStartWithUs]',
})
export class StartWithUsDirective {
  private timeout: number = -1;
  constructor(private el: ElementRef, private location: Location) {}
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    clearTimeout(this.timeout);
    this.timeout = window.setTimeout(() => {
      this.check();
    }, 400);
  }
  check() {
    if (
      this.el.nativeElement.getBoundingClientRect().top <= 0 &&
      this.el.nativeElement.getBoundingClientRect().bottom > 0 &&
      !this.location.isCurrentPathEqualTo('/start-with-us')
    )
      this.location.go('/start-with-us');
  }
}
