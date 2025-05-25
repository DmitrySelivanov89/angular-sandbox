import { ChangeDetectionStrategy, Component, inject, OnDestroy, signal } from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { MatButton } from '@angular/material/button';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatToolbarModule, MatIconModule, DatePipe, MatButton, RouterLink],
})
export class ToolbarComponent implements OnDestroy {
  private readonly authService = inject(AuthService);

  readonly isLoggedIn = this.authService.isAuthenticated;

  readonly timeNow = signal(new Date());

  private readonly intervalId = setInterval(() => this.timeNow.set(new Date()), 1000);

  ngOnDestroy(): void {
    clearInterval(this.intervalId);
  }

  logout(): void {
    this.authService.logout();
  }
}
