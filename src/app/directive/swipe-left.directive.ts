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
  selector: '[appSwipeLeft]',
})
export class SwipeLeftDirective {
  //   private defaults: any = {
  //     offset: 0,
  //   };
  //   constructor(private el: ElementRef) {}

  //   @HostListener('window:scroll', ['$event'])
  //   onScroll() {
  //     if (this.isInViewport()) {
  //       setTimeout(() => {
  //         var arr = this.el.nativeElement.children;
  //         for (var i = 0; i < arr.length; i++) {
  //           arr[i].style.transform = `translateX(0)`;
  //           setTimeout(this.deleteProperies.bind(null, arr[i]), i * 100 + 200);
  //         }
  //       }, 500);
  //     }
  //   }
  //   deleteProperies(el: HTMLElement) {
  //     el.style.transform = ``;
  //     el.style.transition = ``;
  //     el.style.transitionDelay = ``;
  //   }
  //   private isInViewport(): boolean {
  //     const bounding = this.el.nativeElement.getBoundingClientRect();
  //     let top =
  //       bounding.top -
  //       (window.innerHeight || document.documentElement.clientHeight) +
  //       document.documentElement.clientHeight / 3;
  //     let bottom = bounding.top + bounding.height + this.defaults.offset;

  //     return top < 0 && bottom > 0;
  //   }
  //   ngOnInit() {
  //     var arr = this.el.nativeElement.children;

  //     for (var i = 0; i < arr.length; i++) {
  //       arr[i].style.transform = `translateX(-100px)`;
  //       arr[i].style.transition = `transform 0.2s ease-out ${i * 100}ms`;
  //     }
  //   }
  // }
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
    offset: 0,
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
    }, 500);
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
        style({ opacity: 0, transform: 'translateX(-50px)' }),
        animate(
          '1200ms cubic-bezier(0.35, 0, 0.25, 1)',
          style({ opacity: 1, transform: 'translateX(0)' })
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
