import {
  ChangeDetectionStrategy,
  Component,
  inject,
  OnInit,
  signal,
} from '@angular/core';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import { DatePipe } from '@angular/common';
import { AuthService } from '../../services/auth.service';
import { MatButton } from '@angular/material/button';

@Component({
  selector: 'app-toolbar',
  templateUrl: 'toolbar.component.html',
  styleUrls: ['toolbar.component.css'],
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [MatToolbarModule, MatIconModule, DatePipe, MatButton],
})
export class ToolbarComponent implements OnInit {
  private readonly authService = inject(AuthService);

  readonly isLoggedIn = this.authService.isAuthenticated;

  readonly timeNow = signal(new Date());

  ngOnInit(): void {
    setInterval(() => this.timeNow.set(new Date()), 1000);
  }

  logout(): void {
    this.authService.logout();
  }
}
