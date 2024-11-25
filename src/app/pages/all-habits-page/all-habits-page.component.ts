import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Habit } from '../../models/habit';
import { AllHabitsComponent } from '../../components/all-habits/all-habits.component';
import { HabitService } from '../../services/habit.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-all-habits-page',
  template: `
    <app-all-habits
      [habits]="habits()"
      (add)="addHabit()"
      (edit)="editHabit($event)"
      (delete)="deleteHabit($event)"
    />
  `,
  standalone: true,
  imports: [AllHabitsComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AllHabitsPageComponent {
  private readonly habitService = inject(HabitService);
  private readonly router = inject(Router);

  readonly habits = this.habitService.habits;

  addHabit() {
    this.router.navigate(['new-habit']);
  }

  editHabit(habit: Habit) {
    this.habitService.selectHabit(habit);
    this.router.navigate(['edit-habit', habit.id]);
  }

  deleteHabit(habit: Habit) {
    this.habitService.deleteHabit(habit);
  }
}
