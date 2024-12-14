import { ChangeDetectionStrategy, Component, inject } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';
import { MatButton } from '@angular/material/button';
import {
  TableHeaderTemplateDirective,
  TableRowTemplateDirective,
} from '../../directives/template-context-guard.directive';
import { EmployeeService } from '../../services/employee.service';
import { InventoryService } from '../../services/inventory.service';
import { toSignal } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-table-page',
  templateUrl: 'table-page.component.html',
  standalone: true,
  imports: [
    CurrencyPipe,
    TableComponent,
    MatButton,
    TableHeaderTemplateDirective,
    TableRowTemplateDirective,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EmployeeService, InventoryService],
})
export class TablePageComponent {
  private readonly employeeService = inject(EmployeeService);
  private readonly inventoryService = inject(InventoryService);

  readonly employees = toSignal(this.employeeService.employees$, {
    initialValue: [],
  });
  readonly inventory = toSignal(this.inventoryService.inventory$, {
    initialValue: [],
  });

  purchaseItem(plu: number) {
    console.log('handle purchase for', plu);
  }
}
