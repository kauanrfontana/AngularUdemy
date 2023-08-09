import { Injectable } from '@angular/core';
import { User } from '../models/user.model';

@Injectable({
  providedIn: 'root'
})
export class UsersService {
  activeUsers: User[] = [{name: 'Max'}, {name: 'Anna'}];
  inactiveUsers: User[] = [{name: 'Chris'}, {name: 'Manu'}];

  ActiveUser(id:number){
    this.activeUsers.push(this.inactiveUsers[id]);
    this.inactiveUsers.splice(id, 1)
  }

  InctiveUser(id:number){
    this.inactiveUsers.push(this.activeUsers[id]);
    this.activeUsers.splice(id, 1)
  }
}
