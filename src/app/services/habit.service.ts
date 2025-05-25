import { computed, Injectable, signal } from '@angular/core';
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

  readonly selectedHabit = computed(() => {
    return this.habitsSignal().find((habit) => habit.id === this.selectedHabitSignal()?.id);
  });

  readonly habits = this.habitsSignal.asReadonly();

  deleteHabit(id: Habit['id']) {
    this.habitsSignal.update((habits) => habits.filter((hab) => hab.id !== id));
  }

  updateHabit(habit: Habit) {
    this.habitsSignal.update((habits) => habits.map((hab) => (hab.id === habit.id ? habit : hab)));
  }

  createHabit(habit: Habit) {
    this.habitsSignal.update((habits) => [
      ...habits,
      {
        ...habit,
        id: crypto.randomUUID(),
        createdAt: new Date().toISOString(),
      },
    ]);
  }

  selectHabit(habit: Habit | undefined) {
    this.selectedHabitSignal.set(habit);
  }
}
