import { Directive, input } from '@angular/core';
import { AbstractControl, NG_VALIDATORS, ValidationErrors, Validator, ValidatorFn } from '@angular/forms';

@Directive({
  selector: '[appValidator]',
  providers: [{ provide: NG_VALIDATORS, useExisting: ValidatorDirective, multi: true }],
})
export class ValidatorDirective implements Validator {
  readonly validator = input.required<ValidatorFn>();

  validate(control: AbstractControl): ValidationErrors | null {
    const validatorFn = this.validator();
    return validatorFn(control);
  }
}
