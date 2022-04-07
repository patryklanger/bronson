import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appNavbarBacklight]',
})
export class NavbarBacklightDirective {
  constructor(private el: ElementRef) {
    this.el.nativeElement.style.transition =
      'background-color 0.2s ease-in-out';
  }
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    if (window.scrollY >= window.innerHeight)
      this.el.nativeElement.style.backgroundColor = 'rgba(0,0,0,0.8)';
    else if (window.scrollY > 30)
      this.el.nativeElement.style.backgroundColor = 'rgba(50,50,50,0.5)';
    else this.el.nativeElement.style.backgroundColor = 'rgba(50,50,50,0)';
  }
}
