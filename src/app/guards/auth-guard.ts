import {
  ActivatedRouteSnapshot,
  CanActivateFn,
  Router,
  RouterStateSnapshot,
} from '@angular/router';
import { AuthService } from '../services/auth.service';
import { inject } from '@angular/core';

export const authGuard: CanActivateFn = (
  route: ActivatedRouteSnapshot,
  state: RouterStateSnapshot,
) => {
  const router = inject(Router);
  const isAuthenticated = inject(AuthService).isAuthenticated;

  if (!isAuthenticated()) {
    router.navigate(['login']);
    return false;
  } else {
    return true;  
  }
};
