import { Routes } from '@angular/router';
import { HabitFormPageComponent } from './pages/habit-form-page/habit-form-page.component';
import { authGuard } from './guards/auth-guard';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { AllHabitsPageComponent } from './pages/all-habits-page/all-habits-page.component';
import { PageNotFoundPageComponent } from './pages/page-not-found/page-not-found.component';
import { TablePageComponent } from './pages/table-page/table-page.component';

export const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  {
    path: 'habits',
    canActivate: [authGuard],
    component: AllHabitsPageComponent,
  },
  {
    path: 'edit-habit/:id',
    canActivate: [authGuard],
    component: HabitFormPageComponent,
  },
  {
    path: 'new-habit',
    canActivate: [authGuard],
    component: HabitFormPageComponent,
  },
  {
    path: 'table',
    canActivate: [authGuard],
    component: TablePageComponent,
  },
  { path: '', redirectTo: 'habits', pathMatch: 'full' },
  { path: '**', component: PageNotFoundPageComponent },
];
