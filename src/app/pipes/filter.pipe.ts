import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterNameCat',
})
export class FilterPipe implements PipeTransform {
  transform(values: any, search: string) {
    if (search === '') {
      return values;
    }
    let cats = [];
    for (let cat of values) {
      if (cat.name === search) {
        cats.push(cat);
      }
    }
    return cats;
  }
}
