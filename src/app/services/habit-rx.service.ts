import { Injectable } from '@angular/core';
import { scan, shareReplay, Subject } from 'rxjs';
import { Habit } from '../models/habit';

type ActionType = 'add' | 'update' | 'delete';

export interface Action<T> {
  entity: T;
  action: ActionType;
}

@Injectable({
  providedIn: 'root',
})
export class HabitRxService {
  private readonly habitSubject = new Subject<Action<Habit>>();
  private readonly habitAction$ = this.habitSubject.asObservable();

  readonly habits$ = this.habitAction$.pipe(
    scan((items, itemAction) => this.modifyHabits(items, itemAction), [] as Habit[]),
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  addHabit(habit: Habit): void {
    this.habitSubject.next({
      entity: habit,
      action: 'add',
    });
  }

  removeHabit(habit: Habit): void {
    this.habitSubject.next({
      entity: habit,
      action: 'delete',
    });
  }

  updateInCart(habit: Habit) {
    this.habitSubject.next({
      entity: habit,
      action: 'update',
    });
  }

  private modifyHabits(habits: Habit[], operation: Action<Habit>): Habit[] {
    switch (operation.action) {
      case 'add':
        return [...habits, operation.entity];
      case 'update':
        return habits.map((item) => (item.id === operation.entity.id ? operation.entity : item));
      case 'delete':
        return habits.filter((item) => item.id !== operation.entity.id);
      default:
        return habits;
    }
  }
}
