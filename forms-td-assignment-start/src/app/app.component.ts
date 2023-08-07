import { Component, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  @ViewChild('f') form: NgForm;
  subscriptions = ['Basic', 'Advanced', 'Pro'];
  selectedSubscription = 'Advanced';
  submitted = false;
  account = {
    email: '',
    subscription: '',
    password: ''
  };

  onSubmit(){
    this.submitted = true;
    this.account.email = this.form.value.email;
    this.account.subscription = this.form.value.subscription;
    this.account.password = this.form.value.password;

    this.form.reset();
  }

}
