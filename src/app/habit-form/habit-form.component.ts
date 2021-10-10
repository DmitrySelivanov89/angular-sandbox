import {Habit} from '../models/habit';
import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';

@Component({
  selector: 'app-habit-form',
  templateUrl: './habit-form.component.html',
  styleUrls: ['./habit-form.component.scss'],
})
export class HabitFormComponent implements OnInit {
  habitForm = new FormGroup({
    name: new FormControl(''),
    frequency: new FormControl(''),
    description: new FormControl(''),
  });
  @Input() adding: boolean = false;
  @Output() submit = new EventEmitter<Habit>();
  @Output() exit = new EventEmitter<void>();

  constructor() {}

  @Input() set editingHabit(value: Habit | undefined) {
    if (!value) {
      this.habitForm.reset();
    } else {
      this.habitForm.patchValue(value);
    }
  }

  ngOnInit(): void {}

  exitForm() {
    this.exit.emit();
  }

  onSubmit() {
    this.submit.emit(this.habitForm.value);
  }
}
