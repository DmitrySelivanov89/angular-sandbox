import { InjectionToken } from '@angular/core';
import { Observable } from 'rxjs';
import { Settings } from '../models/settings';

export const SETTINGS_TOKEN = new InjectionToken<Observable<Settings>>(
  'SETTINGS_TOKEN',
);
