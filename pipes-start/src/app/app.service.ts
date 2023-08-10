import { Injectable } from '@angular/core';
import { Subject } from 'rxjs-compat'

@Injectable({
  providedIn: 'root'
})
export class AppService {
  reFilter = new Subject<void>();

  constructor() { }
}
