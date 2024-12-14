import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Inventory } from '../models/inventory';

@Injectable()
export class InventoryService {
  constructor() {
    console.log(Math.random());
  }

  readonly inventory$: Observable<Inventory[]> = of([
    {
      plu: 110,
      supplier: 'X Corp',
      name: 'Table extender',
      inStock: 500,
      price: 50,
      currency: 'GBP',
    },
    {
      plu: 120,
      supplier: 'X Corp',
      name: 'Heated toilet seat',
      inStock: 0,
      price: 80,
      currency: 'GBP',
    },
    {
      plu: 155,
      supplier: 'Y Corp',
      name: 'Really good pencil',
      inStock: 1,
      price: 8000,
      currency: 'AUD',
    },
  ]);
}
