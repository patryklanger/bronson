import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSlider]',
})
export class SliderDirective {
  currentPosition: number[] = [];
  interval: number = 0;
  timeout: number = 0;
  private defaults: any = {
    offset: 0,
  };
  constructor(private el: ElementRef) {}
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    clearTimeout(this.timeout);
    clearInterval(this.interval);
    this.timeout = window.setTimeout(() => {
      if (this.isInViewport())
        this.interval = window.setInterval(this.nextElement.bind(this), 1000);
    }, 150);
  }

  nextElement() {
    var elementsToAnimate = this.el.nativeElement.children;
    var elementsAmount = elementsToAnimate.length;
    this.currentPosition = this.currentPosition.map((e) => e + 100);
    for (var i = 0; i < elementsAmount; i++) {
      if (elementsToAnimate[i].getAttribute('last') == 'true') {
        elementsToAnimate[i].style.transform = 'translateX(-100vw)';
        elementsToAnimate[i].setAttribute('last', 'false');
        elementsToAnimate[i].style.transition = 'transform 0.4s ease-in-out';
        this.currentPosition[i] = -100;
        if (i + 1 > elementsToAnimate.length - 1) {
          elementsToAnimate[0].setAttribute('last', 'true');
          elementsToAnimate[i].style.transition = 'none';
        } else {
          elementsToAnimate[i + 1].setAttribute('last', 'true');
          elementsToAnimate[i + 1].style.transform = `translateX(${
            this.currentPosition[i + 1]
          }vw)`;
          elementsToAnimate[i].style.transition = 'none';
          i++;
        }
      } else {
        elementsToAnimate[
          i
        ].style.transform = `translateX(${this.currentPosition[i]}vw)`;

        elementsToAnimate[i].style.transition = 'transform 0.4s ease-in-out';
      }
    }
  }
  initAnim() {
    var elementsToAnimate = this.el.nativeElement.children;
    for (var i = -1; i < elementsToAnimate.length - 1; i++) {
      if (i + 1 == elementsToAnimate.length - 1) {
        elementsToAnimate[i + 1].setAttribute('last', 'true');
      } else elementsToAnimate[i + 1].setAttribute('last', 'false');
      this.currentPosition.push(i * 100);
      elementsToAnimate[i + 1].style.transform = `translateX(${
        this.currentPosition[i + 1]
      }vw`;
    }
  }
  private isInViewport(): boolean {
    const bounding = this.el.nativeElement.getBoundingClientRect();

    let top =
      bounding.top -
      (window.innerHeight || document.documentElement.clientHeight);
    let bottom = bounding.top + bounding.height + this.defaults.offset;

    return top < 0 && bottom > 0;
  }

  ngOnInit() {
    this.initAnim();
  }
}
