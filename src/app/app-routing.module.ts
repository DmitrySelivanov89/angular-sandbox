import {AllHabitsComponent} from './all-habits/all-habits.component';
import {HabitFormComponent} from './habit-form/habit-form.component';
import {NgModule,} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';

const routes: Routes = [
  {path: 'habit-form/:id', component: HabitFormComponent},
  {path: 'habit-form', component: HabitFormComponent},
  {path: '', component: AllHabitsComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
