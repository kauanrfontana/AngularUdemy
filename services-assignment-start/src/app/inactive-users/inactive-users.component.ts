import { Component, EventEmitter, Input, Output } from '@angular/core';
import { User } from '../models/user.model';
import { UsersService } from '../services/users.service';

@Component({
  selector: 'app-inactive-users',
  templateUrl: './inactive-users.component.html',
  styleUrls: ['./inactive-users.component.css']
})
export class InactiveUsersComponent {
  users: User[];

  constructor(private usersService: UsersService){}

  ngOnInit(): void {
    this.users = this.usersService.inactiveUsers
  }

  onSetToActive(id: number) {
    this.usersService.ActiveUser(id);
  }
}
