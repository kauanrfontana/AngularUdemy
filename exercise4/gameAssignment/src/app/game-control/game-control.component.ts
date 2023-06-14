import { Component } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  started = false;
  time = 0;
  interval:any;

  btn_start = true;
  btn_stop = false;

  startGame(){
    this.btn_start = false;
    this.btn_stop = true;
    this.started = true; 
    this.interval = setInterval(() => {
      this.time++
    }, 1000)
  }

  gameOver(){
    this.btn_start = true;
    this.btn_stop = false;
    clearInterval(this.interval)
  }
}
