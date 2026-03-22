import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'zeroPad',
})
export class PreencheZerosPipe implements PipeTransform {
  transform(value: number | string, size: number = 6): string {
    if (value === null || value === undefined) return ''.padStart(size, '0');
    return value.toString().padStart(size, '0');
  }
}
