import { APP_INITIALIZER, Injector, Provider } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map, Observable } from 'rxjs';
import { Settings } from '../models/settings';
import { SETTINGS_TOKEN } from '../tokens/settings.token';
import { API_URL_TOKEN } from '../tokens/api-url.token';

export function provideEnv(): Provider {
  return [
    {
      provide: APP_INITIALIZER,
      useFactory: (http: HttpClient): Observable<Settings> => {
        return http.get<Settings>('src/assets/settings.json');
      },
      deps: [HttpClient],
      multi: true,
    },
    {
      provide: SETTINGS_TOKEN,
      useFactory: (http: HttpClient): Observable<Settings> => {
        return http.get<Settings>('src/assets/settings.json');
      },
      deps: [HttpClient],
    },
    {
      provide: API_URL_TOKEN,
      useFactory: (injector: Injector) => {
        return injector.get(SETTINGS_TOKEN).pipe(map((s) => s.apiUrl));
      },
      deps: [Injector],
    },
  ];
}
