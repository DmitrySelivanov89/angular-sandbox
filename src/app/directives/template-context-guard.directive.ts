import { Directive, input } from '@angular/core';

interface TableHeaderTemplateContext<T extends object> {
  readonly $implicit: T[];
}

interface TableRowTemplateContext<T extends object> {
  readonly $implicit: T;
}

@Directive({
  selector: 'ng-template[appTableHeader]',
})
export class TableHeaderTemplateDirective<T extends object> {
  readonly data = input<T[] | '' | undefined>(undefined, {
    alias: 'appTableHeader',
  });

  static ngTemplateContextGuard<T extends object>(
    dir: TableHeaderTemplateDirective<T>,
    ctx: unknown
  ): ctx is TableHeaderTemplateContext<T> {
    return true;
  }
}

@Directive({
  selector: 'ng-template[appTableRow]',
})
export class TableRowTemplateDirective<T extends object> {
  readonly data = input<T[]>([], {
    alias: 'appTableRow',
  });

  static ngTemplateContextGuard<T extends object>(
    dir: TableRowTemplateDirective<T>,
    ctx: unknown
  ): ctx is TableRowTemplateContext<T> {
    return true;
  }
}
