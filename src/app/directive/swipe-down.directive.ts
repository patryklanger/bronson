import { Directive, ElementRef, HostListener, Input } from '@angular/core';
import {
  AnimationBuilder,
  AnimationFactory,
  AnimationMetadata,
  AnimationPlayer,
  style,
  animate,
} from '@angular/animations';
@Directive({
  selector: '[appSwipeDown]',
})
export class SwipeDownDirective {
  @Input() animateInAnimation:
    | AnimationMetadata
    | AnimationMetadata[]
    | undefined;
  @HostListener('window:scroll', ['$event']) // for window scroll events
  onScroll() {
    if (!this.initialized) return;
    this.animate();
  }
  animated = false;
  initialized = false;
  private animating: boolean | undefined;
  private player: AnimationPlayer | undefined;
  private defaults: any = {
    offset: 100,
  };

  constructor(
    private el: ElementRef,
    private animationBuilder: AnimationBuilder
  ) {}

  ngOnInit() {
    setTimeout(() => {
      this.initialize();
      this.initialized = true;
      this.animate();
    }, 100);
  }

  private initialize(): void {
    let animation: AnimationFactory;

    if (
      this.animateInAnimation !== null &&
      this.animateInAnimation !== undefined
    ) {
      animation = this.animationBuilder.build(this.animateInAnimation);
    } else {
      animation = this.animationBuilder.build([
        style({ opacity: 0.01, transform: 'translateY(30px)' }),
        animate(
          '1200ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'translateY(0)' })
        ),
      ]);
    }

    this.player = animation.create(this.el.nativeElement);
    this.player.init();
  }

  private animate(): void {
    const inView = this.isInViewport();

    if (!inView) this.animating = false;
    if (!inView || this.animating || this.animated) return;
    this.player!.play();
    this.animating = true;
    this.animated = this.animating && inView;
  }

  private isInViewport(): boolean {
    const bounding = this.el.nativeElement.getBoundingClientRect();

    let top =
      bounding.top -
      (window.innerHeight || document.documentElement.clientHeight);
    let bottom = bounding.top + bounding.height + this.defaults.offset;

    return top < 0 && bottom > 0;
  }
}
