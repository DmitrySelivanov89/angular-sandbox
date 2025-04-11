import { ChangeDetectionStrategy, Component, contentChild, effect, input, Signal, TemplateRef } from '@angular/core';
import { KeyValuePipe, NgTemplateOutlet } from '@angular/common';
import {
  TableHeaderTemplateDirective,
  TableRowTemplateDirective,
} from '../../directives/template-context-guard.directive';

@Component({
  selector: 'app-table',
  templateUrl: 'table.component.html',
  styleUrls: ['table.component.scss'],
  imports: [NgTemplateOutlet, KeyValuePipe],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TableComponent<TItem extends object> {
  readonly data = input<TItem[]>([]);

  readonly headers: Signal<TemplateRef<TItem> | undefined> = contentChild(TableHeaderTemplateDirective, {
    read: TemplateRef,
  });

  readonly rows: Signal<TemplateRef<TItem> | undefined> = contentChild(TableRowTemplateDirective, {
    read: TemplateRef,
  });

  constructor() {
    effect(() => {
      console.log(this.headers());
      console.log(this.rows());
      console.log(this.data());
    });
  }
}
