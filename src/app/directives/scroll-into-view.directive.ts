import { Directive, ElementRef, inject, input, OnInit, OnDestroy } from '@angular/core';

@Directive({
  selector: '[appScrollIntoView]',
})
export class ScrollIntoViewDirective implements OnInit, OnDestroy {
  private readonly elementRef = inject(ElementRef);

  readonly blockPosition = input<ScrollLogicalPosition>('center');
  readonly scrollBehavior = input<ScrollBehavior>('instant');
  readonly appScrollIntoView = input.required<boolean>();

  private readonly observer = new IntersectionObserver(
    (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting) {
        entry.target.scrollIntoView({
          behavior: this.scrollBehavior(),
          block: this.blockPosition(),
        });
        // Disconnect after scrolling since we only need to do this once
        this.observer?.disconnect();
      }
    },
    {
      threshold: 1.0,
    }
  );

  // private readonly scrollIntoViewEffect = effect(() => {
  //   if (this.appScrollIntoView()) {
  //     this.setupObserver();
  //   }
  // });

  ngOnInit() {
    if (this.appScrollIntoView()) {
      this.observer.observe(this.elementRef.nativeElement);
    }
  }

  ngOnDestroy() {
    this.observer?.disconnect();
  }
}
