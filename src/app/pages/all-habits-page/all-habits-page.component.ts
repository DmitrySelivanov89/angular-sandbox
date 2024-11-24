import { Component, inject } from '@angular/core';
import { Habit } from '../../models/habit';
import { AllHabitsComponent } from '../../components/all-habits/all-habits.component';
import { Observable } from 'rxjs';
import { AsyncPipe } from '@angular/common';
import { HabitService } from '../../services/habit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-habits-page',
  template: `
    <app-all-habits
      [habits]="habits$ | async"
      (add)="addHabit()"
      (edit)="editHabit($event)"
      (delete)="deleteHabit($event)"
    />
  `,
  standalone: true,
  imports: [AllHabitsComponent, AsyncPipe],
})
export class AllHabitsPageComponent {
  private habitService = inject(HabitService);
  private router = inject(Router);

  readonly habits$: Observable<Habit[]> = this.habitService.habits$;

  addHabit() {
    this.router.navigate(['new-habit']);
  }

  editHabit(habit: Habit) {
    this.router.navigate(['edit-habit', habit.id]);
  }

  deleteHabit(habit: Habit) {
    this.habitService.delete(habit);
  }
}
