import { ChangeDetectionStrategy, Component, forwardRef, model, signal } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

interface Rating {
  stars: number;
}

@Component({
  selector: 'app-rating',
  templateUrl: './rating.component.html',
  styleUrls: ['./rating.component.scss'],
  providers: [
    {
      provide: NG_VALUE_ACCESSOR,
      useExisting: forwardRef(() => RatingComponent),
      multi: true,
    },
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class RatingComponent implements ControlValueAccessor {
  readonly ratings: ReadonlyArray<Rating> = [{ stars: 1 }, { stars: 2 }, { stars: 3 }, { stars: 4 }, { stars: 5 }];

  // disabled = false;
  readonly disabled = signal(false);

  readonly value = model(0);
  // value = 0;

  onChanged: (value: number) => void = () => {};

  onTouched: () => void = () => {};

  writeValue(val: number) {
    this.value.set(val);
    // this.value = val
  }

  registerOnChange(fn: (value: number) => void) {
    this.onChanged = fn;
  }

  registerOnTouched(fn: () => void) {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    // this.disabled = isDisabled;
    this.disabled.set(isDisabled);
  }

  setRating(rating: Rating): void {
    if (!this.disabled()) {
      this.value.set(rating.stars);
      // this.value = rating.stars
      this.onChanged(rating.stars);
      this.onTouched();
    }
  }
}
