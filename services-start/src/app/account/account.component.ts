import { Component, EventEmitter, Input, Output } from '@angular/core';
import { LoggingService } from '../services/logging.service';
import { Account } from '../models/account.model';
import { AccountService } from '../services/account.service';

@Component({
  selector: 'app-account',
  templateUrl: './account.component.html',
  styleUrls: ['./account.component.css'],
  providers: [LoggingService]
})
export class AccountComponent {
  @Input() account: Account;
  @Input() id: number;

  constructor(private loggingService: LoggingService, private accountService: AccountService){}

  onSetTo(status: string) {
    this.accountService.updateStatus(this.id, status);
    // this.loggingService.logStatusChange(status);
    this.accountService.statusUpdated.emit(status);
  }
}
