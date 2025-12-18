import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'menosumtospacepipe',
})
export class menosumToSpacePipe implements PipeTransform {
  transform(value: number): string {
    if (value == -1)  return '';
    return value.toString();
  }
}
