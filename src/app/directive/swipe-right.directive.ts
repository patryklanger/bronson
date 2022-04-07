import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appSwipeRight]',
})
export class SwipeRightDirective {
  private defaults: any = {
    offset: 0,
  };
  constructor(private el: ElementRef) {}
  @HostListener('window:scroll', ['$event'])
  onScroll() {
    if (this.isInViewport()) {
      var arr = this.el.nativeElement.children;

      for (var i = 0; i < arr.length; i++) {
        arr[i].style.transform = `translateX(0)`;
        arr[i].style.transition = ``;
        arr[i].style.transitionDelay = ``;
      }
    }
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
      arr[i].style.transform = `translateX(100px)`;
      arr[i].style.transition = `transform 0.4s ease-in-out`;
      arr[i].style.transitionDelay = `${i * 200}ms`;
    }
  }
}
