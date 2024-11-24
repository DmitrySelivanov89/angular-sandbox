import { enableProdMode } from '@angular/core';
import { environment } from './environments/environment';
import { AppComponent } from './app/app.component';
import { provideAnimations } from '@angular/platform-browser/animations';
import { routes } from './app/app-routes';
import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';

if (environment.production) {
  enableProdMode();
}

bootstrapApplication(AppComponent, {
  providers: [provideRouter(routes), provideAnimations()],
}).catch((err) => console.error(err));
