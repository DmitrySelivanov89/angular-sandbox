import { ChangeDetectionStrategy, Component } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { fromEvent, map, merge, scan, Subject } from 'rxjs';
import { AsyncPipe } from '@angular/common';

const accumulationHandler = (event: PointerEvent) => (state: PointerEvent[]) => [...state, event];

const resetHandler = (event: void) => (state: PointerEvent[]) => [];

@Component({
  selector: 'app-page-click-counter',
  imports: [AsyncPipe, MatButtonModule],
  template: ` <section class="app-description">
      <div>
        <h1>Page Click Visualizer</h1>
        <p>Start clicking around the page...</p>
      </div>
    </section>
    <div>
      <button mat-stroked-button (click)="reset$.next(); $event.stopPropagation()">Reset State</button>
    </div>
    @for (click of clicks$ | async; track $index) {
      <div [style.left.px]="click.clientX" [style.top.px]="click.clientY" class="click"></div>
    }`,
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class PageClickCounterComponent {
  readonly reset$ = new Subject<void>();

  readonly clicks$ = merge(
    fromEvent<PointerEvent>(document, 'click').pipe(map(accumulationHandler)),
    this.reset$.pipe(map(resetHandler))
  ).pipe(scan((state: PointerEvent[], stateHandlerFn) => stateHandlerFn(state), []));
}
