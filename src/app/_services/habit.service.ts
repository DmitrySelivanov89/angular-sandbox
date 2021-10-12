import { Injectable } from '@angular/core'
import { Habit } from '../models/habit'

@Injectable({
  providedIn: 'root'
})
export class HabitService {
  private habits: Habit[] = [{
    name: 'Гулять в лесу',
    description: 'Полезно для разгрузки мозга',
    frequency: 'Ежедневно'
  }]

  constructor() {
  }

  async getAll() {
    return this.habits
  }

  async delete(id: number) {
    this.habits.splice(id, 1)
  }

  async update(editingIndex: number, habit: Habit) {
    this.habits.splice(editingIndex, 1, habit)
    console.log('update')
    console.log(this.habits)
  }

  async create(habit: Habit) {
    this.habits.push(habit)
    console.log('create')
    console.log(this.habits)
  }

  async getById(i: number) {
    return this.habits[i]
  }
}
