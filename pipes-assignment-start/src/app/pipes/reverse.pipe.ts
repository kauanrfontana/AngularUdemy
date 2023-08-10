import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'reverse'
})
export class ReversePipe implements PipeTransform {

  transform(value: any): any {
    let stringArr = value.split('');
    stringArr = stringArr.reverse();
    return stringArr.join('');
  }

}
