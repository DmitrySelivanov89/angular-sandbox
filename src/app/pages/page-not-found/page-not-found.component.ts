import { ChangeDetectionStrategy, Component } from '@angular/core';

@Component({
  selector: 'app-not-found',
  templateUrl: 'page-not-found.component.html',
  standalone: true,
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [],
})
export class PageNotFoundPageComponent {}
