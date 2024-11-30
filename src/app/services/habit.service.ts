import { Injectable, signal } from '@angular/core';
import { Habit } from '../models/habit';

@Injectable({ providedIn: 'root' })
export class HabitService {
  private readonly habitsSignal = signal<Habit[]>([
    {
      id: crypto.randomUUID(),
      name: 'Гулять в лесу',
      description: 'Полезно для разгрузки мозга',
      frequency: 'Ежедневно',
      createdAt: new Date().toISOString(),
    },
  ]);

  private readonly selectedHabitSignal = signal<Habit | undefined>(undefined);

  readonly selectedHabit = this.selectedHabitSignal.asReadonly();

  readonly habits = this.habitsSignal.asReadonly();

  deleteHabit(habit: Habit) {
    this.habitsSignal.update((habits) =>
      habits.filter((hab) => hab.id !== habit.id),
    );
  }

  updateHabit(habit: Habit) {
    this.habitsSignal.update((habits) =>
      habits.map((hab) => (hab.id === habit.id ? habit : hab)),
    );
  }

  createHabit(habit: Habit) {
    const newHabit = {
      ...habit,
      id: crypto.randomUUID(),
      createdAt: new Date().toISOString(),
    };
    this.habitsSignal.update((habits) => [...habits, newHabit]);
  }

  selectHabit(habit: Habit | undefined) {
    this.selectedHabitSignal.set(habit);
  }
}
