import { ChangeDetectionStrategy, Component, computed, effect, input, linkedSignal, signal } from '@angular/core';

@Component({
  selector: 'app-combobox',
  templateUrl: './combobox.html',
  styleUrls: ['./combobox.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class CustomComboboxComponent {
  readonly options = input.required<string[]>();
  readonly selectedOption = linkedSignal(() => this.options()[-1]);
  readonly searchTerm = signal('');
  readonly isOpen = signal(false);

  readonly filterOptions = computed(() => {
    return this.options().filter((option) => {
      return option.toLowerCase().includes(this.searchTerm().toLowerCase());
    });
  });

  constructor() {
    // effect(() => {
    //   console.log(this.searchTerm(), this.options(), this.selectedOption());
    // });
    //
    effect(() => {
      console.log(this.selectedOption());
    });
  }

  onInput(e: Event) {
    console.log(e);
  }

  selectOption(option: string) {
    this.selectedOption.set(option);
    this.searchTerm.set(option);
    this.isOpen.set(false);
  }
}
