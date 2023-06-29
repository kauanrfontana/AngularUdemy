import { Component, OnInit } from '@angular/core';
import { AccountService } from './services/account.service';
import { Account } from './models/account.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent implements OnInit{
  accounts: Account[] = [];

  constructor(private accountService: AccountService){}

  ngOnInit(): void {
    this.accounts = this.accountService.accounts;
  }

  onAccountAdded(account:Account){
    this.accountService.addAccount(account)
  }
} 
