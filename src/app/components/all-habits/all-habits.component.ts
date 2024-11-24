import {
  ChangeDetectionStrategy,
  Component,
  EventEmitter,
  Input,
  Output,
} from '@angular/core';
import { Habit } from '../../models/habit';
import { MatIconModule } from '@angular/material/icon';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';
import { NgForOf } from '@angular/common';

@Component({
  selector: 'app-all-habits',
  templateUrl: './all-habits.component.html',
  styleUrls: ['./all-habits.component.scss'],
  standalone: true,
  imports: [MatIconModule, MatCardModule, MatButtonModule, NgForOf],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllHabitsComponent {
  @Input()
  habits: Habit[] | null = [];

  @Output()
  readonly add: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  readonly edit: EventEmitter<Habit> = new EventEmitter<Habit>();

  @Output()
  readonly delete: EventEmitter<Habit> = new EventEmitter<Habit>();

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
