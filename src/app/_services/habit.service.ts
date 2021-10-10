import {Injectable} from '@angular/core';
import {Habit} from "../models/habit";

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  habits: Habit[] = [{
    name: 'Гулять в лесу',
    description: 'Полезно для разгрузки мозга',
    frequency: 'Ежедневно'
  }];

  constructor() {
  }

  async getAll() {
    return this.habits;
  }

  async delete(id: number) {
    this.habits.splice(id, 1);
  }

  async update(editingIndex: number, habit: Habit) {
    this.habits.splice(editingIndex, 1, habit);
  }

  async create(habit: Habit) {
    this.habits.push(habit);
  }
}
