import { Routes } from '@angular/router';
import { AllHabitsPageComponent } from './pages/all-habits-page/all-habits-page.component';
import { HabitFormPageComponent } from './pages/habit-form-page/habit-form-page.component';

export const routes: Routes = [
  { path: 'edit-habit/:id', component: HabitFormPageComponent },
  { path: 'new-habit', component: HabitFormPageComponent },
  { path: '', component: AllHabitsPageComponent, pathMatch: 'full' },
  { path: '**', component: AllHabitsPageComponent },
];
