import { Injectable } from '@angular/core';
import { Habit } from '../models/habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  private habits: Habit[] = [
    {
      name: 'Гулять в лесу',
      description: 'Полезно для разгрузки мозга',
      frequency: 'Ежедневно',
    },
  ];

  getAll() {
    return this.habits;
  }

  delete(id: number) {
    this.habits.splice(id, 1);
  }

  update(editingIndex: number, habit: Habit) {
    this.habits.splice(editingIndex, 1, habit);
  }

  create(habit: Habit) {
    this.habits.push(habit);
  }

  getById(i: number) {
    return this.habits[i];
  }
}
