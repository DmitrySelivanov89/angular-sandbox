import {NgModule,} from '@angular/core';
import {RouterModule, Routes} from '@angular/router';
import {AllHabitsPageComponent} from "./all-habits-page/all-habits-page.component";
import {HabitFormPageComponent} from "./habit-form-page/habit-form-page.component";

const routes: Routes = [
  {path: 'habit-form/:id', component: HabitFormPageComponent},
  {path: 'habit-form', component: HabitFormPageComponent},
  {path: '', component: AllHabitsPageComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {
}
