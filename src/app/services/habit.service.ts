import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Habit } from '../models/habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  private readonly habitsSubject = new BehaviorSubject<Habit[]>([
    {
      name: 'Гулять в лесу',
      description: 'Полезно для разгрузки мозга',
      frequency: 'Ежедневно',
    },
  ]);

  readonly habits$ = this.habitsSubject.asObservable();

  private habits: Habit[] = [
    {
      name: 'Гулять в лесу',
      description: 'Полезно для разгрузки мозга',
      frequency: 'Ежедневно',
    },
  ];

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
