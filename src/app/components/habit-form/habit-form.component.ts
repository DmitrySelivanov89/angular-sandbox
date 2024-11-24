import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Habit } from '../../models/habit';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

interface HabitForm {
  name: FormControl<string | null>;
  description: FormControl<string | null>;
  frequency: FormControl<string | null>;
}

interface Option {
  value: string;
  label: string;
}

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.scss'],
  standalone: true,
  imports: [
    MatOptionModule,
    MatInputModule,
    MatCardModule,
    ReactiveFormsModule,
    MatSelectModule,
    MatButtonModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitFormComponent {
  readonly habitForm: FormGroup<HabitForm> = new FormGroup({
    name: new FormControl(''),
    frequency: new FormControl(''),
    description: new FormControl(''),
  });

  readonly options: ReadonlyArray<Option> = [
    { label: 'Ежедневно', value: 'daily' },
    { label: 'Еженедельно', value: 'Weekly' },
    { label: 'Ежемесячно', value: 'Monthly' },
    { label: 'Ежегодно', value: 'Yearly' },
  ];

  @Input()
  placeholder = '';

  @Input() adding = false;

  @Output()
  readonly emitSubmit = new EventEmitter<Habit>();

  @Output()
  readonly exit = new EventEmitter<void>();

  @Input()
  set editingHabit(value: Habit) {
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
    this.emitSubmit.emit(this.habitForm.value as Habit);
  }
}
