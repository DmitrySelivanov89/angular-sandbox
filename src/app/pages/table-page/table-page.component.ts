import { ChangeDetectionStrategy, Component, inject, OnInit } from '@angular/core';
import { CurrencyPipe } from '@angular/common';
import { TableComponent } from '../../components/table/table.component';
import { MatButton } from '@angular/material/button';
import {
  TableHeaderTemplateDirective,
  TableRowTemplateDirective,
} from '../../directives/template-context-guard.directive';
import { EmployeeService } from '../../services/employee.service';
import { InventoryService } from '../../services/inventory.service';
import { RatingComponent } from '../../components/rating/rating.component';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { toSignal } from '@angular/core/rxjs-interop';
import { Product } from '../../models/product';

interface InventoryFormGroup {
  [p: string]: FormControl<number>;
}

@Component({
  selector: 'app-table-page',
  templateUrl: 'table-page.component.html',
  imports: [
    CurrencyPipe,
    TableComponent,
    MatButton,
    TableHeaderTemplateDirective,
    TableRowTemplateDirective,
    RatingComponent,
    ReactiveFormsModule,
    FormsModule,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EmployeeService, InventoryService, ProductService],
})
export class TablePageComponent implements OnInit {
  private readonly employeeService = inject(EmployeeService);
  private readonly inventoryService = inject(InventoryService);
  private readonly productService = inject(ProductService);

  readonly products = this.productService.products;

  // brand = computed(() => this.productResource.value()?.brand);

  // readonly employees = toSignal(this.employeeService.employees$, {
  //   initialValue: [],
  // });
  readonly employees = this.employeeService.employees;
  // readonly inventory = toSignal(this.inventoryService.inventory$, {
  //   initialValue: [],
  // });
  readonly inventory = this.inventoryService.inventory;

  readonly inventoryForm = new FormGroup<InventoryFormGroup>({});

  readonly columns: ReadonlyArray<string> = ['Item', 'Price', 'Corp'];
  readonly emptyColumns: ReadonlyArray<number> = [1, 2, 3];

  ngOnInit() {
    for (const item of this.inventory()) {
      this.inventoryForm.addControl(
        item.id,
        new FormControl({ value: item.rating, disabled: item.inStock === 0 }, { nonNullable: true })
      );
    }
    // this.inventoryForm.valueChanges.subscribe(console.log);
  }

  purchaseItem(plu: number) {
    console.log('handle purchase for', plu);
  }

  deleteItem(id: string) {
    console.log('handle delete', id);
  }
}
