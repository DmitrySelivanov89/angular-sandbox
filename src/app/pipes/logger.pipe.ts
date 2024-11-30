import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'logger',
  standalone: true,
})
export class LoggerPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return console.log(value, ...args);
  }
}
