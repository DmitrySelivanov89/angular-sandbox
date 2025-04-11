import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';

export const API_URL_TOKEN = new InjectionToken<Observable<string>>('API_URL_MY_TOKEN');
