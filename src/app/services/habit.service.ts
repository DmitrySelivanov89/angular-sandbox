import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';
import { Habit } from '../models/habit';

@Injectable({
  providedIn: 'root',
})
export class HabitService {
  private readonly habitsSubject = new BehaviorSubject<Habit[]>([
    {
      id: crypto.randomUUID(),
      name: 'Гулять в лесу',
      description: 'Полезно для разгрузки мозга',
      frequency: 'Ежедневно',
    },
  ]);

  private readonly selectedHabit = new BehaviorSubject<Habit | null>(null);

  readonly selectedHabit$ = this.selectedHabit.asObservable();

  readonly habits$ = this.habitsSubject.asObservable();

  delete(habit: Habit) {
    // this.habits.slice(id, 1);
  }

  update(habit: Habit) {
    // this.habits.splice(editingIndex, 1, habit);
  }

  create(habit: Habit) {
    // this.habits.push(habit);
  }

  selectHabit(habit: Habit) {
    this.selectedHabit.next(habit);
  }
}
