import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { GameControlComponent } from './game-control/game-control.component';
import { OddOrEvenComponent } from './odd-or-even/odd-or-even.component';

@NgModule({
  declarations: [
    AppComponent,
    GameControlComponent,
    OddOrEvenComponent,
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
