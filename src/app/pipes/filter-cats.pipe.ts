import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterCat',
})
export class FilterCatsPipe implements PipeTransform {
  transform(value: string, length: number) {
    if (value.length > length) {
      return value.substring(0, length) + '...';
    }
    return value;
  }
}
