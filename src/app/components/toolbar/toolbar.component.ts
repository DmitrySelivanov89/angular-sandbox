import { Component } from '@angular/core';
import { MatIconModule } from '@angular/material/icon';
import { MatToolbarModule } from '@angular/material/toolbar';

@Component({
  selector: 'app-toolbar',
  template: `
    <div class="toolbar-container">
      <mat-toolbar class="toolbar" color="primary">
        <mat-icon aria-hidden="false" aria-label="check mark icon"
          >fact_check
        </mat-icon>
        <h1>Трекер привычек</h1>
      </mat-toolbar>
    </div>
  `,
  styles: [
    `
      .toolbar h1 {
        padding-left: 5px;
      }
    `,
  ],
  standalone: true,
  imports: [MatToolbarModule, MatIconModule],
})
export class ToolbarComponent {}
