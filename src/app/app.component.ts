import {Component, OnInit} from '@angular/core';
import {Habit} from './models/habit';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title: string = 'Трекер привычек';
  habits: Habit[] = [];
  public adding = false;
  public editing = false;
  editingIndex: number = 0;
  editingHabit?: Habit = undefined;

  ngOnInit(): void {
  }

  // public onSubmit(habit: Habit) {
  //   if (this.editing) {
  //     this.habits.splice(this.editingIndex, 1, habit);
  //   } else {
  //     this.habits.push(habit);
  //   }
  //   this.exitForm();
  // }

  // public setEditForm(index: number) {
  //   const habit = this.habits[index];
  //
  //   this.editingHabit = habit;
  //   this.editing = true;
  //   this.editingIndex = index;
  // }

  exitForm() {
    this.adding = false;
    this.editing = false;
  }
}
