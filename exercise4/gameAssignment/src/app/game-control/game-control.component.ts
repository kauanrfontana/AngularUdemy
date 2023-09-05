import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-game-control',
  templateUrl: './game-control.component.html',
  styleUrls: ['./game-control.component.css']
})
export class GameControlComponent {
  @Output() addedElement = new EventEmitter<number>();

  started = false;
  interval:any;
  element = 0;
  btn_start = true;
  btn_stop = false;

  startGame(){
    this.btn_start = false;
    this.btn_stop = true;
    this.started = true; 
    this.interval = setInterval(() => {
      this.element++
      this.addedElement.emit(this.element)
    }, 1000)
  }

  gameOver(){
    this.btn_start = true;
    this.btn_stop = false;
    clearInterval(this.interval)
  }
}
