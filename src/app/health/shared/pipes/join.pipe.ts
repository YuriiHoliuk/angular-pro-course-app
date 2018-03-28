import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join'
})
export class JoinPipe implements PipeTransform {

  transform(value: any[] | any): string | any {
    return Array.isArray(value) ? value.join(', ') : value;
  }
}
