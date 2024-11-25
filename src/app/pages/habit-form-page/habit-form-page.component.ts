import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Habit } from '../../models/habit';
import { HabitService } from '../../services/habit.service';
import { HabitFormComponent } from '../../components/habit-form/habit-form.component';

@Component({
  selector: 'app-habit-form-page',
  template: `
    <app-habit-form
      (exit)="exitForm()"
      (emitSubmit)="submitForm($event)"
      [habit]="selectedHabit()"
    />
  `,
  standalone: true,
  imports: [HabitFormComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class HabitFormPageComponent {
  private readonly habitService = inject(HabitService);
  private router = inject(Router);

  readonly selectedHabit = this.habitService.selectedHabit;

  exitForm() {
    this.closeForm();
  }

  submitForm(habit: Habit) {
    console.log(habit);
    if (!habit.id) {
      this.habitService.createHabit(habit);
    } else {
      this.habitService.updateHabit(habit);
    }
    this.closeForm();
  }

  closeForm() {
    this.habitService.selectHabit(undefined);
    this.router.navigate(['']);
  }
}
