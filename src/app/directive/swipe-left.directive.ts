import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSwipeLeft]',
})
export class SwipeLeftDirective {
  private defaults: any = {
    offset: 0,
  };
  constructor(private el: ElementRef) {}

  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.isInViewport()) {
      setTimeout(() => {
        var arr = this.el.nativeElement.children;
        for (var i = 0; i < arr.length; i++) {
          arr[i].style.transform = `translateX(0)`;
          setTimeout(this.deleteProperies.bind(null, arr[i]), i * 200 + 200);
        }
      }, 500);
    }
  }
  deleteProperies(el: HTMLElement) {
    el.style.transform = ``;
    el.style.transition = ``;
    el.style.transitionDelay = ``;
  }
  private isInViewport(): boolean {
    const bounding = this.el.nativeElement.getBoundingClientRect();
    let top =
      bounding.top -
      (window.innerHeight || document.documentElement.clientHeight) +
      document.documentElement.clientHeight / 3;
    let bottom = bounding.top + bounding.height + this.defaults.offset;

    return top < 0 && bottom > 0;
  }
  ngOnInit() {
    var arr = this.el.nativeElement.children;

    for (var i = 0; i < arr.length; i++) {
      arr[i].style.transform = `translateX(-100px)`;
      arr[i].style.transition = `transform 0.2s ease-in-out ${i * 200}ms`;
    }
  }
}
