import { Component, inject } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Habit } from '../../models/habit';
import { HabitService } from '../../services/habit.service';
import { HabitFormComponent } from '../../components/habit-form/habit-form.component';

@Component({
  selector: 'app-habit-form-page',
  template: `
    <app-habit-form
      (exit)="exitForm()"
      (emitSubmit)="submitForm($event)"
      [adding]="!editing"
      [editingHabit]="habit"
    />
  `,
  standalone: true,
  imports: [HabitFormComponent],
})
export class HabitFormPageComponent {
  private habitService = inject(HabitService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  editing = false;

  habit!: Habit;

  exitForm() {
    this.closeForm();
  }

  submitForm(habit: Habit) {
    if (this.editing) {
      this.habitService.update(habit);
    } else {
      this.habitService.create(habit);
    }
    this.closeForm();
  }

  closeForm() {
    this.router.navigate(['']);
  }
}
