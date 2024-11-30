import {
  HttpHandlerFn,
  HttpInterceptorFn,
  HttpRequest,
} from '@angular/common/http';
import { inject } from '@angular/core';
import { AuthService } from '../services/auth.service';

export const authInterceptor: HttpInterceptorFn = (
  req: HttpRequest<unknown>,
  next: HttpHandlerFn,
) => {
  const token = inject(AuthService).token;
  const modifiedReq = req.clone({
    headers: req.headers.set('Authorization', `Bearer ${token}`),
  });
  return next(modifiedReq);
};
