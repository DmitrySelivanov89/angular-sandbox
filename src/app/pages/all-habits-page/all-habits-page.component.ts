import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Habit } from '../../models/habit';
import { HabitService } from '../../services/habit.service';

@Component({
  selector: 'app-all-habits-page',
  templateUrl: './all-habits-page.component.html',
  styleUrls: ['./all-habits-page.component.scss'],
})
export class AllHabitsPageComponent implements OnInit {
  habits: Habit[] = [];

  constructor(private habitService: HabitService, private router: Router) {}

  ngOnInit() {
    this.habits = this.habitService.getAll();
  }

  addHabit() {
    this.router.navigate(['habit-form']);
  }

  editHabit(id: number) {
    this.router.navigate(['habit-form', id]);
  }

  deleteHabit(id: number) {
    this.habitService.delete(id);
  }
}
