export class Habit {
  name: string;
  frequency: string;
  description: string;

  constructor(name: string, frequency: string, description: string) {
    this.name = name;
    this.frequency = frequency;
    this.description = description;
  }
}
