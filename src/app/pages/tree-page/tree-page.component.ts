import { ChangeDetectionStrategy, Component } from '@angular/core';
import { TreeNode, TreeViewComponent } from '../../components/tree-view/tree-view.component';
import { TreeComponent, ValueOrArray } from '../../components/tree/tree.component';

@Component({
  selector: 'app-tree-page',
  templateUrl: './tree-page.component.html',
  styleUrls: ['./tree-page.component.css'],
  imports: [TreeViewComponent, TreeComponent],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class TreePageComponent {
  readonly items: ValueOrArray<string> = ['Hello', ['here', 'is', ['some', 'structured'], 'Data'], 'Bye'];

  readonly treeData: TreeNode<unknown>[] = [
    {
      data: { name: 'Node 1', type: 'folder' },
      expanded: true,
      children: [
        { data: { name: 'Node 1.1', type: 'file' } },
        {
          data: { name: 'Node 1.2', type: 'folder' },
          children: [
            { data: { name: 'Node 1.2.1', type: 'file' } },
            { data: { name: 'Node 1.2.2', type: 'file' } },
            {
              data: { name: 'Node 1.2.3', type: 'folder' },
              children: [
                { data: { name: 'Node 1.2.3.1', type: 'file' } },
                { data: { name: 'Node 1.2.3.2', type: 'file' } },
              ],
            },
          ],
        },
      ],
    },
    {
      data: { name: 'Node 2', type: 'folder' },
      expanded: false,
      children: [
        { data: { name: 'Node 2.1', type: 'file' } },
        {
          data: { name: 'Node 2.2', type: 'folder' },
          children: [
            { data: { name: 'Node 2.2.1', type: 'file' } },
            { data: { name: 'Node 2.2.2', type: 'file' } },
            {
              data: { name: 'Node 2.2.3', type: 'folder' },
              children: [
                { data: { name: 'Node 2.2.3.1', type: 'file' } },
                { data: { name: 'Node 2.2.3.2', type: 'file' } },
              ],
            },
          ],
        },
      ],
    },
    {
      data: { name: 'Node 3', type: 'folder' },
      expanded: false,
      children: [{ data: { name: 'Node 3.1', type: 'file' } }, { data: { name: 'Node 3.2', type: 'file' } }],
    },
  ];
}
