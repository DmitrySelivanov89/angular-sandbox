import { Component, OnInit } from '@angular/core'
import { ActivatedRoute, Router } from '@angular/router'
import { from, of } from 'rxjs'
import { map, switchMap, tap } from 'rxjs/operators'
import { HabitService } from '../_services/habit.service'
import { Habit } from '../models/habit'

@Component({
  selector: 'app-habit-form-page',
  templateUrl: './habit-form-page.component.html',
  styleUrls: ['./habit-form-page.component.scss']
})
export class HabitFormPageComponent implements OnInit {
  habit: Habit | undefined = undefined
  editing: boolean = false
  private editingIndex: number = 0

  constructor(private habitService: HabitService, private router: Router, private route: ActivatedRoute) {
    this.init()
  }

  ngOnInit() {
  }

  async exitForm() {
    await this.closeForm()
  }

  async submitForm(habit: Habit) {
    if (this.editing) {
      console.log('edt')
      console.log(this.editing)
      await this.habitService.update(this.editingIndex, habit)
    } else {
      console.log('crt')
      console.log(this.editing)
      await this.habitService.create(habit)
    }
    await this.closeForm()
  }

  async closeForm() {
    await this.router.navigate([''])
  }

  private init() {
    this.route.params.pipe(
      map(params => {
        // проверить есть параметре params поле id
        // return params.id ? parseInt(params.id) : null
        if (params.id) {
          this.editing = true
          return parseInt(params.id)
        } else {
          this.editing = false
          return null
        }
      }),
      switchMap(i => {
        // return i != null ? from(this.habitService.getById(i)) : of(undefined)
        if (i != null) {
          return from(this.habitService.getById(i))
        }
        return of(undefined)
      }),
      tap(habit => {
        this.habit = habit
      })
    ).subscribe()
  }
}
