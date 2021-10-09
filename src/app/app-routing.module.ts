import {HabitFormComponent} from './habit-form/habit-form.component';
import {NgModule,} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllHabitsPageComponent} from "./all-habits-page/all-habits-page.component";

const routes: Routes = [
  {path: 'habit-form/:id', component: HabitFormComponent},
  {path: 'habit-form', component: HabitFormComponent},
  {path: '', component: AllHabitsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
