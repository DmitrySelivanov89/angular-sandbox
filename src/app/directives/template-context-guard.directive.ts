import { Directive, input } from '@angular/core';

interface TableHeaderTemplateContext<TItem extends object> {
  $implicit: TItem[];
}

interface TableRowTemplateContext<TItem extends object> {
  $implicit: TItem;
}

@Directive({
  selector: 'ng-template[appTableHeader]',
  standalone: true,
})
export class TableHeaderTemplateDirective<TItem extends object> {
  readonly data = input<TItem[] | '' | undefined>(undefined, {
    alias: 'appTableHeader',
  });

  static ngTemplateContextGuard<TContextItem extends object>(
    dir: TableHeaderTemplateDirective<TContextItem>,
    ctx: unknown,
  ): ctx is TableHeaderTemplateContext<TContextItem> {
    return true;
  }
}

@Directive({
  selector: 'ng-template[appTableRow]',
  standalone: true,
})
export class TableRowTemplateDirective<TItem extends object> {
  readonly data = input<TItem[] | undefined>(undefined, {
    alias: 'appTableRow',
  });

  static ngTemplateContextGuard<TContextItem extends object>(
    dir: TableRowTemplateDirective<TContextItem>,
    ctx: unknown,
  ): ctx is TableRowTemplateContext<TContextItem> {
    return true;
  }
}
