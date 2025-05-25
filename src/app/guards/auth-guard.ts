import { CanActivateFn, Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = () => {
  const router = inject(Router);
  const isAuthenticated = inject(AuthService).isAuthenticated;

  if (!isAuthenticated()) {
    return router.createUrlTree(['login']);
  } else {
    return true;
  }
};
