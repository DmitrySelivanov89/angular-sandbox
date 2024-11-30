import { inject, Injectable, signal } from '@angular/core';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root',
})
export class AuthService {
  private readonly router = inject(Router);
  private readonly authSignal = signal(false);

  readonly isAuthenticated = this.authSignal.asReadonly();

  get token(): string | null {
    return localStorage.getItem('token');
  }

  setAuth(value: boolean): void {
    this.authSignal.set(value);
  }

  login(): void {
    this.setAuth(true);
    localStorage.setItem('token', crypto.randomUUID());
    this.router.navigate(['/']);
  }

  logout(): void {
    this.setAuth(false);
    localStorage.removeItem('token');
    this.router.navigate(['login']);
  }
}
