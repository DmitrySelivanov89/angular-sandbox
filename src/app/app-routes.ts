import { Routes } from '@angular/router';
import { authGuard } from './guards/auth-guard';

export const routes: Routes = [
  {
    path: 'login',
    loadComponent: () => import('./pages/login-page/login-page.component').then((m) => m.LoginPageComponent),
  },
  {
    path: 'habits',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/all-habits-page/all-habits-page.component').then((m) => m.AllHabitsPageComponent),
  },
  {
    path: 'edit-habit/:id',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/habit-form-page/habit-form-page.component').then((m) => m.HabitFormPageComponent),
  },
  {
    path: 'new-habit',
    canActivate: [authGuard],
    loadComponent: () =>
      import('./pages/habit-form-page/habit-form-page.component').then((m) => m.HabitFormPageComponent),
  },
  {
    path: 'table',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/table-page/table-page.component').then((m) => m.TablePageComponent),
  },
  {
    path: 'tree',
    canActivate: [authGuard],
    loadComponent: () => import('./pages/tree-page/tree-page.component').then((m) => m.TreePageComponent),
  },
  { path: '', redirectTo: 'habits', pathMatch: 'full' },
  {
    path: '**',
    loadComponent: () =>
      import('./pages/page-not-found/page-not-found.component').then((m) => m.PageNotFoundPageComponent),
  },
];
