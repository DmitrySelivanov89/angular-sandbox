import { DestroyRef, Directive, ElementRef, inject, OnInit } from '@angular/core';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';
import { concatMap, fromEvent, map, Observable, takeUntil } from 'rxjs';

interface Position {
  left: number;
  top: number;
}

@Directive({
  selector: '[appDraggable]',
})
export class DraggableDirective implements OnInit {
  private readonly el: ElementRef<HTMLDivElement> = inject(ElementRef);
  // private readonly renderer = inject(Renderer2);
  private readonly destroyRef = inject(DestroyRef);

  ngOnInit() {
    this.drag(
      fromEvent<MouseEvent>(this.el.nativeElement, 'mousedown'),
      fromEvent<MouseEvent>(document, 'mousemove'),
      fromEvent<MouseEvent>(document, 'mouseup')
    )
      .pipe(takeUntilDestroyed(this.destroyRef))
      .subscribe((position) => {
        // this.renderer.setStyle(this.el.nativeElement, 'position', 'absolute');
        this.el.nativeElement.style.left = `${position.left}px`;
        this.el.nativeElement.style.top = `${position.top}px`;
        // this.renderer.setStyle(this.el.nativeElement, 'left', `${position.left}px`);
        // this.renderer.setStyle(this.el.nativeElement, 'top', `${position.top}px`);
      });
  }

  private drag(
    mousedown$: Observable<MouseEvent>,
    mousemove$: Observable<MouseEvent>,
    mouseup$: Observable<MouseEvent>
  ): Observable<Position> {
    return mousedown$.pipe(
      concatMap((startEvent: MouseEvent) => {
        return mousemove$.pipe(
          map((moveEvent: MouseEvent) => {
            moveEvent.preventDefault();
            return {
              left: moveEvent.clientX - startEvent.clientX,
              top: moveEvent.clientY - startEvent.clientY,
            };
          }),
          takeUntil(mouseup$)
        );
      })
    );
  }
}
