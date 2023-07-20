import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { User } from './modal/user.modal';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent {
  users = [
    {
      id: 1,
      name: 'Max'
    },
    {
      id: 2,
      name: 'Anna'
    },
    {
      id: 3,
      name: 'Chris'
    }
  ];

  constructor(private router: Router){}

  onSelectUser(user: User) {
    this.router.navigate([`/users/${user.id}/${user.name}`]);
  }
}
