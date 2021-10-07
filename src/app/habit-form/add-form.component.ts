import { Habit } from './../models/habit';
import { Component, Input, OnInit, EventEmitter, Output } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';

@Component({
  selector: 'app-add-form',
  templateUrl: './add-form.component.html',
  styleUrls: ['./add-form.component.scss'],
})
export class AddFormComponent implements OnInit {
  habitForm = new FormGroup({
    name: new FormControl(''),
    frequency: new FormControl(''),
    description: new FormControl(''),
  });

  constructor() {}

  ngOnInit(): void {}

  @Input()
  set habit(value: Habit | undefined) {
    if (!value) {
      this.habitForm.reset();
    } else {
      this.habitForm.patchValue(value);
    }
  }

  @Input()
  adding: boolean = false;

  @Output()
  submit = new EventEmitter<Habit>();

  @Output()
  exit = new EventEmitter<void>();

  exitForm() {
    this.exit.emit();
  }

  onSubmit() {
    this.submit.emit();
  }
}
