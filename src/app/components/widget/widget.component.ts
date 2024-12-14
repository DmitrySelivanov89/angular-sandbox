import {
  ChangeDetectionStrategy,
  Component,
  input,
  TemplateRef,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
  selector: 'app-widget',
  templateUrl: 'widget.component.html',
  styleUrls: ['widget.component.scss'],
  standalone: true,
  imports: [NgTemplateOutlet],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class WidgetComponent {
  readonly headerTemplate = input<TemplateRef<unknown>>();

  readonly actionTemplate = input<TemplateRef<unknown>>();

  readonly contentTemplate = input<TemplateRef<unknown>>();

  // imperative style
  // readonly container = viewChild('container', {read: ViewContainerRef})
  //
  // readonly defaultTemplate = viewChild<TemplateRef<unknown>>('defaultTemplate')

  // readonly data: Signal<TemplateRef<T> | undefined> = contentChild('data');
  //
  // ngAfterViewInit() {
  //   this.container()?.createEmbeddedView(this.defaultTemplate()!);
  // }
}
