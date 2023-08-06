import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'decimal'
})
export class DecimalPipe implements PipeTransform {

  transform(value: number, ...args: unknown[]): unknown {
    return value.toFixed(1);
  }

}
