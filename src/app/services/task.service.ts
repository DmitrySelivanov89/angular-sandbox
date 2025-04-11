import { Injectable } from '@angular/core';
import { scan, shareReplay, Subject } from 'rxjs';

export interface Task {
  id: string;
  title: string;
  completed: boolean;
}

type ActionType = 'add' | 'update' | 'delete';

export interface Action<T> {
  item: T;
  action: ActionType;
}

@Injectable({
  providedIn: 'root',
})
export class TaskService {
  private readonly taskSubject = new Subject<Action<Task>>();

  readonly tasks$ = this.taskSubject.pipe(
    scan((tasks, action) => this.modifyTask(tasks, action), [] as Task[]),
    shareReplay({ refCount: true, bufferSize: 1 })
  );

  addTask(task: Task) {
    this.taskSubject.next({
      item: { ...task },
      action: 'add',
    });
  }

  removeTask(task: Task) {
    this.taskSubject.next({
      item: { ...task },
      action: 'delete',
    });
  }

  updateTask(task: Task) {
    this.taskSubject.next({
      item: { ...task },
      action: 'update',
    });
  }

  private modifyTask(tasks: Task[], action: Action<Task>) {
    switch (action.action) {
      case 'add':
        return [...tasks, action.item];
      case 'update':
        return tasks.map((task) => (task.id === action.item.id ? action.item : task));
      case 'delete':
        return tasks.filter((task) => task.id !== action.item.id);
      default:
        return [...tasks];
    }
  }
}
