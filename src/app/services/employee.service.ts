import { Injectable, signal } from '@angular/core';
import { delay, Observable, of } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService {
  readonly employees = signal<Employee[]>([
    { firstName: 'Employee', lastName: 'One' },
    { firstName: 'Employee', lastName: 'Two' },
    { firstName: 'Employee', lastName: 'Three' },
    { firstName: 'Employee', lastName: 'Four' },
    { firstName: 'Employee', lastName: 'Five' },
  ]).asReadonly();

  readonly employees$: Observable<Employee[]> = of([
    { firstName: 'Employee', lastName: 'One' },
    { firstName: 'Employee', lastName: 'Two' },
    { firstName: 'Employee', lastName: 'Three' },
    { firstName: 'Employee', lastName: 'Four' },
    { firstName: 'Employee', lastName: 'Five' },
  ]).pipe(delay(2000));
}
