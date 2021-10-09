import {Component, OnInit} from '@angular/core';
import {HabitService} from "../_services/habit.service";
import {Habit} from "../models/habit";
import {Router} from "@angular/router";

@Component({
  selector: 'app-all-habits-page',
  templateUrl: './all-habits-page.component.html',
  styleUrls: ['./all-habits-page.component.scss']
})
export class AllHabitsPageComponent implements OnInit {
  habits: Habit[] = []

  constructor(private habitService: HabitService, private router: Router) {
  }

  async ngOnInit() {
  this.habits = await this.habitService.getAll();
  }

 async addHabit() {
 await this.router.navigate(['habit-form'])
  }

 async editHabit(id: number) {
    await this.router.navigate(['habit-form', id])
  }

 async deleteHabit(id: number) {
   await this.habitService.delete(id)
  }
}
