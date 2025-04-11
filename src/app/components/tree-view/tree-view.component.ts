import { ChangeDetectionStrategy, Component, input, TemplateRef } from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

export interface TreeNode<T> {
  data: T;
  children?: TreeNode<T>[];
  expanded?: boolean;
}

@Component({
  selector: 'app-tree-view',
  templateUrl: './tree-view.component.html',
  styleUrls: ['./tree-view.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  imports: [NgTemplateOutlet],
})
export class TreeViewComponent<T> {
  readonly nodes = input.required<TreeNode<T>[]>();
  readonly nodeTemplate = input<TemplateRef<T>>();

  toggleNode(node: TreeNode<T>) {
    node.expanded = !node.expanded;
  }
}
