import {Injectable} from '@angular/core';
import {Habit} from "../models/habit";

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habits: Habit[] = [{
    name: 'fffff',
    description: 'ffff',
    frequency: 'fffff'
  }];

  constructor() {
  }

  async getAll() {
    return this.habits;
  }

  async delete(id: number) {
    this.habits.splice(id, 1);
  }
}
