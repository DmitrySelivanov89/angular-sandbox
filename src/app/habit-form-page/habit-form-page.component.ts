import {Component, OnInit} from '@angular/core';
import {HabitService} from "../_services/habit.service";
import {ActivatedRoute, Router} from "@angular/router";
import {Habit} from "../models/habit";
import {map, switchMap, tap} from "rxjs/operators";
import {from, of} from "rxjs";

@Component({
  selector: 'app-habit-form-page',
  templateUrl: './habit-form-page.component.html',
  styleUrls: ['./habit-form-page.component.scss']
})
export class HabitFormPageComponent implements OnInit {
  habit: Habit | undefined = undefined;
  private editing = false;
  private editingIndex: number = 0;

  constructor(private habitService: HabitService, private router: Router, private route: ActivatedRoute) {
    this.init();
  }

  ngOnInit() {
  }

  async exitForm() {
    await this.closeForm()
  }

  async submitForm(habit: Habit) {
    if (this.editing) {
      await this.habitService.update(this.editingIndex, habit);
    } else {
      await this.habitService.create(habit);
    }
    await this.closeForm();
  }

  async closeForm() {
    await this.router.navigate([''])
  }

  private init() {
    this.route.params.pipe(
      map(params => {
        // проверить есть параметре params поле id
        if (params.id) {
          // если есть, то превратить в число
          return parseInt(params.id);
          // eсли нет,то возвращаем null
        } else {
          return null;
        }
      }),
      switchMap(i => {
        if (i != null) {
          return from(this.habitService.getById(i));
        }
        return of(undefined)
      }),
      tap(habit => {
        this.habit = habit;
      })
    ).subscribe()
  }
}
