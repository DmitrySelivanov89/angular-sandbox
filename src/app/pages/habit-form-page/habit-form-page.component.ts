import { Component, inject, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { EMPTY, of } from 'rxjs';
import { map, switchMap, tap } from 'rxjs/operators';
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
    ></app-habit-form>
  `,
  standalone: true,
  imports: [HabitFormComponent],
})
export class HabitFormPageComponent implements OnInit {
  private habitService = inject(HabitService);
  private route = inject(ActivatedRoute);
  private router = inject(Router);

  private editingIndex = 0;

  habit!: Habit;

  editing = false;

  ngOnInit() {
    this.init();
  }

  exitForm() {
    this.closeForm();
  }

  submitForm(habit: Habit) {
    if (this.editing) {
      this.habitService.update(this.editingIndex, habit);
    } else {
      this.habitService.create(habit);
    }
    this.closeForm();
  }

  closeForm() {
    this.router.navigate(['']);
  }

  private init() {
    this.route.params
      .pipe(
        map((params) => {
          if (params.id) {
            this.editing = true;
            return parseInt(params.id);
          } else {
            this.editing = false;
            return null;
          }
        }),
        switchMap((i) =>
          i != null ? of(this.habitService.getById(i)) : EMPTY,
        ),
        tap((habit) => {
          this.habit = habit;
        }),
      )
      .subscribe();
  }
}
