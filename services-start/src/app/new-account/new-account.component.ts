import { Component, EventEmitter, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { Account } from '../models/account.model';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-new-account',
  templateUrl: './new-account.component.html',
  styleUrls: ['./new-account.component.css'],
  // providers: [LoggingService]
})
export class NewAccountComponent {
  @Output() accountAdded = new EventEmitter<Account>();

  constructor(
    private accountService: AccountService
    ){
      this.accountService.statusUpdated.subscribe(
        (status: string) => alert('New Status: ' + status)
      )
    }

  onCreateAccount(account: Account) {
    this.accountService.addAccount(account)
    // this.loggingService.logStatusChange(accountStatus)
  }
}
