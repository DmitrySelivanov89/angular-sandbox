import { ChangeDetectionStrategy, Component, effect, input, OnInit, output } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Habit } from '../../models/habit';
import { MatOptionModule } from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatCardModule } from '@angular/material/card';
import { MatSelectModule } from '@angular/material/select';
import { MatButtonModule } from '@angular/material/button';

interface HabitForm {
  readonly name: FormControl<string>;
  readonly description: FormControl<string>;
  readonly frequency: FormControl<string>;
}

interface Option {
  readonly value: string;
  readonly label: string;
}

@Component({
  selector: 'app-habit-form',
  templateUrl: 'habit-form.component.html',
  styleUrls: ['habit-form.component.css'],
  imports: [MatOptionModule, MatInputModule, MatCardModule, ReactiveFormsModule, MatSelectModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitFormComponent implements OnInit {
  readonly habitForm: FormGroup<HabitForm> = new FormGroup({
    name: new FormControl('', { nonNullable: true }),
    frequency: new FormControl('', { nonNullable: true }),
    description: new FormControl('', { nonNullable: true }),
  });

  readonly options: ReadonlyArray<Option> = [
    { label: 'Ежедневно', value: 'Ежедневно' },
    { label: 'Еженедельно', value: 'Еженедельно' },
    { label: 'Ежемесячно', value: 'Ежемесячно' },
    { label: 'Ежегодно', value: 'Ежегодно' },
  ];

  readonly emitSubmit = output<Habit>();
  readonly exit = output<void>();

  readonly habit = input<Habit | undefined>(undefined);

  constructor() {
    effect(() => {
      console.log(this.habit());
    });
  }

  ngOnInit(): void {
    if (!this.habit()?.id) {
      this.habitForm.reset();
    } else {
      this.habitForm.patchValue(this.habit() as Habit);
    }
  }

  exitForm() {
    this.exit.emit();
  }

  onSubmit() {
    const { description, frequency, name } = this.habitForm.value as Habit;

    this.emitSubmit.emit({
      id: this.habit()?.id ?? '',
      frequency,
      name,
      description,
      createdAt: new Date().toISOString(),
    });
  }
}
