import { Injectable } from '@angular/core';
import { AccountService } from './account.service';

@Injectable({providedIn: 'root'})
export class LoggingService {
  constructor() { }
  
  logStatusChange(message: string){
    console.log('A server status changed, new status: ' + message);

  }
}