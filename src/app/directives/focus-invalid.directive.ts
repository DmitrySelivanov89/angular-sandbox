import { Directive, ElementRef, inject } from '@angular/core';

@Directive({
  selector: '[appFocusInvalidInput]',
  standalone: true,
  host: {
    '(submit)': 'onFormSubmit()',
  },
})
export class FocusInvalidInputDirective {
  private readonly el: ElementRef = inject(ElementRef);

  onFormSubmit() {
    const invalidControl = this.el.nativeElement.querySelector('.ng-invalid');

    if (invalidControl) {
      invalidControl.focus();
    }
  }
}
