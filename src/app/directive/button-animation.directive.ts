import { Directive, ElementRef, HostListener } from '@angular/core';

@Directive({
  selector: '[appButtonAnimation]',
})
export class ButtonAnimationDirective {
  elementWidth: number = 0;
  elementToAnimate: HTMLElement | undefined;
  constructor(private el: ElementRef) {}
  @HostListener('mouseover')
  onMouseOver() {
    this.animate();
    console.log('over element');
  }
  animate() {
    this.elementToAnimate!.style.transition = `transform 0.3s ease-in-out`;
    this.elementToAnimate!.style.transform = `translateX(${this.elementWidth}px)`;
    setTimeout(this.backFromAnimation.bind(this), 300);
  }
  backFromAnimation() {
    this.elementToAnimate!.style.transition = `transform 0.3s ease-in-out`;
    this.elementToAnimate!.style.transform = `translateX(-${this.elementWidth}px)`;
    setTimeout(() => {
      this.elementToAnimate!.style.transition = `transform 0.3s ease-in-out`;
      this.elementToAnimate!.style.transform = `translateX(0)`;
    }, 300);
  }
  ngOnInit() {
    this.elementToAnimate = this.el.nativeElement.children.item(0);
    this.elementWidth = this.el.nativeElement.getBoundingClientRect().width;
  }
}
