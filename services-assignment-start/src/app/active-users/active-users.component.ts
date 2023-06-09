import { Component, EventEmitter, Input, Output, OnInit } from '@angular/core';
import { UsersService } from '../services/users.service';
import { User } from '../models/user.model';

@Component({
  selector: 'app-active-users',
  templateUrl: './active-users.component.html',
  styleUrls: ['./active-users.component.css']
})
export class ActiveUsersComponent implements OnInit{
   users: User[];

  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.users = this.usersService.activeUsers
  }

  onSetToInactive(id: number) {
    this.usersService.InctiveUser(id);
  }
}
