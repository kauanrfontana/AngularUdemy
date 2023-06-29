import { EventEmitter, Injectable } from '@angular/core';
import { Account } from '../models/account.model';
import { LoggingService } from './logging.service';

@Injectable()
export class AccountService {
  accounts = [
    {
      name: 'Master Account',
      status: 'active'
    },
    {
      name: 'Testaccount',
      status: 'inactive'
    },
    {
      name: 'Hidden Account',
      status: 'unknown'
    }
  ];
  statusUpdated = new EventEmitter<string>();

  constructor(private loggingService: LoggingService){}

  addAccount(account: Account) {
    this.accounts.push({
      name: account.name,
      status: account.status,
    })
    this.loggingService.logStatusChange(account.status)
  }

  updateStatus(id: number, status: string) {
    this.accounts[id].status = status;
    this.loggingService.logStatusChange(status)
  }

}