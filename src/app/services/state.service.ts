// import { inject, Injectable } from '@angular/core';
// import { HttpClient } from '@angular/common/http';
// import { merge, Subject } from 'rxjs';
// import { Habit } from '../models/habit';
//
// type ActionType = 'add' | 'update' | 'delete';
//
// export interface Action<T> {
//   item: T;
//   action: ActionType;
// }
//
// @Injectable()
// export class StateService {
//   private readonly http = inject(HttpClient);
//
//   private readonly entities = new Subject<Habit[]>();
//   private readonly deleteEntity = new Subject<Habit>();
//   private readonly updateEntity = new Subject<Habit>();
//   private readonly addEntity = new Subject<Habit>();
//
//   private readonly error = new Subject<unknown>();
//   private readonly error$ = this.error.asObservable();
//
//   private readonly deleteEntity$ = this.deleteEntity.asObservable();
//   private readonly entities$ = this.entities.asObservable();
//   private readonly addEntity$ = this.addEntity.asObservable();
//   private readonly updateEntity$ = this.updateEntity.asObservable();
//
//   readonly allPosts$ = merge(
//     this.entities$,
//     this.deleteEntity$,
//     this.addEntity$,
//     this.updateEntity$,
//   );
//   // scan(
//   //   (entities, entity) => this.modifyHabit(entities, entity),
//   //   [] as Habit[],
//   // ),
//
//   private modifyHabit(items: Habit[], operation: Action<Habit>): Habit[] {
//     switch (operation.action) {
//       case 'add':
//         return [...items, operation.item];
//       case 'update':
//         return items.map((item) =>
//           item.id === operation.item.id ? item : operation.item,
//         );
//       case 'delete':
//         return items.filter((item) => item.id !== operation.item.id);
//       default:
//         return items;
//     }
//   }
// }
