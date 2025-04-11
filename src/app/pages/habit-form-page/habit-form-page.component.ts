import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { Router } from '@angular/router';
import { Habit } from '../../models/habit';
import { HabitService } from '../../services/habit.service';
import { HabitFormComponent } from '../../components/habit-form/habit-form.component';

@Component({
  selector: 'app-habit-form-page',
  templateUrl: './habit-form-page.component.html',
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
    if (!habit.id) {
      this.habitService.createHabit(habit);
    } else {
      this.habitService.updateHabit(habit);
    }
    this.closeForm();
  }

  closeForm() {
    this.habitService.selectHabit(null);
    this.router.navigate(['/']);
  }
}
