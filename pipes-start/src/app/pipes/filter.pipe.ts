import { Pipe, PipeTransform, OnDestroy } from '@angular/core';
import { AppService } from '../app.service';
import { Subscription } from 'rxjs';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform, OnDestroy {
  subscription: Subscription;

  constructor(private appService: AppService) { }

  transform(value: any, filterString: string, propName: string): any {
    if (value.length === 0 || filterString === '') {
      return value
    }
    const resultArray = [];
    for (const item of value) {
      if (item[propName].includes(filterString)) {
        resultArray.push(item);
      }
    };

    this.subscription = this.appService.reFilter.subscribe(
      () => {
        resultArray.splice(0);
        for (const item of value) {
          if (item[propName].includes(filterString)) {
            resultArray.push(item);
          }
        }
      }
    );

    return resultArray;
  }

  ngOnDestroy(): void {
    this.subscription.unsubscribe();
  }

}
