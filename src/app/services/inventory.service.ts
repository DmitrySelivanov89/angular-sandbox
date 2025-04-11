import { Injectable, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Inventory } from '../models/inventory';

@Injectable()
export class InventoryService {
  constructor() {
    console.log(Math.random());
  }

  readonly inventory = signal<Inventory[]>([
    {
      id: crypto.randomUUID(),
      plu: 110,
      supplier: 'X Corp',
      name: 'Table extender',
      inStock: 500,
      price: 50,
      currency: 'GBP',
      rating: 3,
    },
    {
      id: crypto.randomUUID(),
      plu: 120,
      supplier: 'X Corp',
      name: 'Heated toilet seat',
      inStock: 0,
      price: 80,
      currency: 'GBP',
      rating: 4,
    },
    {
      id: crypto.randomUUID(),
      plu: 155,
      supplier: 'Y Corp',
      name: 'Really good pencil',
      inStock: 1,
      price: 8000,
      currency: 'AUD',
      rating: 5,
    },
  ]).asReadonly();

  readonly inventory$: Observable<Inventory[]> = of([
    {
      id: crypto.randomUUID(),
      plu: 110,
      supplier: 'X Corp',
      name: 'Table extender',
      inStock: 500,
      price: 50,
      currency: 'GBP',
      rating: 3,
    },
    {
      id: crypto.randomUUID(),
      plu: 120,
      supplier: 'X Corp',
      name: 'Heated toilet seat',
      inStock: 0,
      price: 80,
      currency: 'GBP',
      rating: 4,
    },
    {
      id: crypto.randomUUID(),
      plu: 155,
      supplier: 'Y Corp',
      name: 'Really good pencil',
      inStock: 1,
      price: 8000,
      currency: 'AUD',
      rating: 5,
    },
  ]).pipe(delay(2000));
}
