import { Component, EventEmitter, Input, Output } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup } from '@angular/forms';
import { Habit } from '../../models/habit';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.scss'],
})
export class HabitFormComponent {
  @Input() placeholder = '';

  habitForm = new UntypedFormGroup({
    name: new UntypedFormControl(''),
    frequency: new UntypedFormControl(''),
    description: new UntypedFormControl(''),
  });

  options = [
    { value: 'Ежедневно' },
    { value: 'Еженедельно' },
    { value: 'Ежемесячно' },
    { value: 'Ежегодно' },
  ];

  @Input() adding: boolean = false;

  @Output() submit = new EventEmitter<Habit>();

  @Output() exit = new EventEmitter<void>();

  @Input() set editingHabit(value: Habit | undefined) {
    if (!value) {
      this.habitForm.reset();
    } else {
      this.habitForm.patchValue(value);
    }
  }

  exitForm() {
    this.exit.emit();
  }

  onSubmit() {
    this.submit.emit(this.habitForm.value);
  }
}
