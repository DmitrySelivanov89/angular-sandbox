import { ChangeDetectionStrategy, Component, computed, effect, input } from '@angular/core';

export type ValueOrArray<T> = T | Array<ValueOrArray<T>>;

// type Stringifier<T> = (item: T) => string;

@Component({
  selector: 'app-tree',
  templateUrl: './tree.component.html',
  styleUrls: ['./tree.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  host: { '[class._array]': 'isArray()' },
})
export class TreeComponent<T> {
  readonly value = input<ValueOrArray<T>>([]);

  readonly stringify = input((item: T) => String(item));

  readonly isArray = computed(() => Array.isArray(this.value()));

  constructor() {
    effect(() => {
      console.log(this.value());
    });
  }
}
