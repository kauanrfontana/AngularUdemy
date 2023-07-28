import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AuthService } from '../auth.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  loggedIn = "Not Logged in";

  constructor(private router: Router, private authService: AuthService) { }

  ngOnInit() {
  }

  onLoadServer(id: number) {
    this.router.navigate(
      ['/servers', id, 'edit'], 
      {queryParams: {allowEdit: '0'}, fragment: 'loading'});
  }

  onLogin(){
    this.authService.login()
    this.loggedIn = "Logged in"
  }

  onLogout(){
    this.authService.logout()
    this.loggedIn = "Not Logged in"
  }
}
