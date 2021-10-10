import {Component, OnInit} from '@angular/core';
import {HabitService} from "../_services/habit.service";
import {Router} from "@angular/router";
import {Habit} from "../models/habit";

@Component({
  selector: 'app-habit-form-page',
  templateUrl: './habit-form-page.component.html',
  styleUrls: ['./habit-form-page.component.scss']
})
export class HabitFormPageComponent implements OnInit {
  private editing = false;
  private editingIndex: number = 0;

  constructor(private habitService: HabitService, private router: Router) {
  }

  async ngOnInit() {
    // this.habits = await this.habitService.getAll();
  }

  async exitForm() {
    await this.closeForm()
  }

  async submitForm(habit: Habit) {
    if (this.editing) {
      await this.habitService.update(this.editingIndex, habit);
    } else {
      await this.habitService.create(habit);

      // this.habits.push(habit);
    }
    await this.closeForm();
  }

  async closeForm() {
    await this.router.navigate([''])
  }
}
