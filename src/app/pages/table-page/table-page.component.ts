import { ChangeDetectionStrategy, Component, effect, inject, OnInit } from '@angular/core';
import { TableComponent } from '../../components/table/table.component';
import {
  TableHeaderTemplateDirective,
  TableRowTemplateDirective,
} from '../../directives/template-context-guard.directive';
import { EmployeeService } from '../../services/employee.service';
import { InventoryService } from '../../services/inventory.service';
import { FormControl, FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ProductService } from '../../services/product.service';
import { UserStore } from '../../services/user.store';
import { MatIconButton } from '@angular/material/button';
import { MatIcon } from '@angular/material/icon';
import { User } from '../../services/user';
import { MatDialog } from '@angular/material/dialog';
import { MatSnackBar } from '@angular/material/snack-bar';
import { UserCardComponent, UserCardDialogData } from '../../components/user-card/user-card.component';

interface InventoryFormGroup {
  readonly [p: string]: FormControl<number>;
}

@Component({
  selector: 'app-table-page',
  templateUrl: 'table-page.component.html',
  imports: [
    TableComponent,
    TableHeaderTemplateDirective,
    TableRowTemplateDirective,
    ReactiveFormsModule,
    FormsModule,
    MatIcon,
    MatIconButton,
  ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [EmployeeService, InventoryService, ProductService, UserStore],
})
export class TablePageComponent implements OnInit {
  private readonly employeeService = inject(EmployeeService);
  private readonly inventoryService = inject(InventoryService);
  private readonly store = inject(UserStore);
  private readonly dialog = inject(MatDialog);
  private snackBar = inject(MatSnackBar);

  // private readonly productService = inject(ProductService);

  readonly users = this.store.users;
  readonly loading = this.store.loading;
  readonly error = this.store.error;

  constructor() {
    effect(() => {
      console.log(this.store.selectedUser());
    });
  }

  // readonly products = this.productService.products;

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

  deleteUser(id: User['id']) {
    this.store.deleteUser(id);
  }

  updateUser(user: User) {
    console.log('Opening dialog with user:', user);
    this.dialog
      .open(UserCardComponent, {
        data: { user } as UserCardDialogData,
      })
      .afterClosed()
      .subscribe((updatedUser) => {
        this.store.updateUser(updatedUser);
      });
  }
}
