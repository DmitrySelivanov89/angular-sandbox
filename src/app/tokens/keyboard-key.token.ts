import { DOCUMENT } from '@angular/common';
import { inject, InjectionToken } from '@angular/core';
import { fromEvent, map, Observable, share } from 'rxjs';

export const KEYBOARD_EVENT_KEY_TOKEN = new InjectionToken<Observable<string>>('keyboard key token', {
  factory: () => {
    const document = inject(DOCUMENT);

    return fromEvent<KeyboardEvent>(document, 'keydown').pipe(
      map((event) => event.key),
      share()
    );
  },
});
