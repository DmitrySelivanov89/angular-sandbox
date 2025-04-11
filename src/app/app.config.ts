import { ApplicationConfig, inject, provideAppInitializer, provideEnvironmentInitializer } from '@angular/core';
import { provideRouter } from '@angular/router';
import { routes } from './app-routes';
import { provideAnimations } from '@angular/platform-browser/animations';
import { HttpClient, provideHttpClient, withFetch, withInterceptors } from '@angular/common/http';
import { authInterceptor } from './interceptors/auth-interceptor';
import { Settings } from './models/settings';
import { firstValueFrom } from 'rxjs';

export const appConfig: ApplicationConfig = {
  providers: [
    provideEnvironmentInitializer(() => {
      console.log('environment initialized');
    }),
    provideAppInitializer(() => {
      const http = inject(HttpClient);
      return firstValueFrom(http.get<Settings>('../../assets/settings.json'));
    }),
    provideRouter(routes),
    provideHttpClient(withFetch(), withInterceptors([authInterceptor])),
    provideAnimations(),
  ],
};
