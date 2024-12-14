import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Employee } from '../models/employee';

@Injectable()
export class EmployeeService {
  readonly employees$: Observable<Employee[]> = of([
    { firstName: 'Employee', lastName: 'One' },
    { firstName: 'Employee', lastName: 'Two' },
    { firstName: 'Employee', lastName: 'Three' },
    { firstName: 'Employee', lastName: 'Four' },
    { firstName: 'Employee', lastName: 'Five' },
  ]);
}
