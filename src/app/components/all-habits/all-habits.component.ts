import { Component, EventEmitter, Input, Output } from '@angular/core';
import { Habit } from '../../models/habit';

@Component({
  selector: 'app-all-habits',
  templateUrl: './all-habits.component.html',
  styleUrls: ['./all-habits.component.scss'],
})
export class AllHabitsComponent {
  @Input() habits: Habit[] = [];

  @Output() add = new EventEmitter<void>();

  @Output() edit = new EventEmitter<number>();

  @Output() delete = new EventEmitter<number>();

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
