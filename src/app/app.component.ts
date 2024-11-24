import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { ToolbarComponent } from './components/toolbar/toolbar.component';

@Component({
  selector: 'app-root',
  template: `
    <app-toolbar />
    <router-outlet />
  `,
  standalone: true,
  imports: [ToolbarComponent, RouterOutlet],
})
export class AppComponent {}
