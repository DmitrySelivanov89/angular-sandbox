import {
  ChangeDetectionStrategy,
  Component,
  input,
  output,
} from '@angular/core';
import { Habit } from '../../models/habit';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-all-habits',
  templateUrl: './all-habits.component.html',
  styleUrls: ['./all-habits.component.css'],
  standalone: true,
  imports: [MatIconModule, MatCardModule, MatButtonModule],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllHabitsComponent {
  habits = input<Habit[]>();

  readonly add = output<void>();

  readonly edit = output<Habit>();

  readonly delete = output<Habit>();

  addButtonClick() {
    this.add.emit();
  }

  editButtonClick(habit: Habit) {
    this.edit.emit(habit);
  }

  onDelete(habit: Habit) {
    this.delete.emit(habit);
  }
}
