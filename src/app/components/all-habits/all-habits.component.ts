import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Habit } from '../../models/habit';
import { MatIconModule } from '@angular/material/icon';
import { NgFor } from '@angular/common';
import { MatCardModule } from '@angular/material/card';
import { MatButtonModule } from '@angular/material/button';

@Component({
  selector: 'app-all-habits',
  templateUrl: './all-habits.component.html',
  styleUrls: ['./all-habits.component.scss'],
  standalone: true,
  imports: [NgFor, MatIconModule, MatCardModule, MatButtonModule],
})
export class AllHabitsComponent {
  @Input()
  habits: Habit[] | null = [];

  @Output()
  readonly add: EventEmitter<void> = new EventEmitter<void>();

  @Output()
  readonly edit: EventEmitter<number> = new EventEmitter<number>();

  @Output()
  readonly delete: EventEmitter<number> = new EventEmitter<number>();

  addButtonClick() {
    this.add.emit();
  }

  editButtonClick(i: number) {
    this.edit.emit(i);
  }

  onDelete(index: number) {
    this.delete.emit(index);
  }
}
