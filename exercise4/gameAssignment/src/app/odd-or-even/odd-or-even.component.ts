import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-odd-or-even',
  templateUrl: './odd-or-even.component.html',
  styleUrls: ['./odd-or-even.component.css']
})
export class OddOrEvenComponent {
  @Input() element!: {type:string, num: number};

  color(){
    return this.element.type === 'Odd' ? 'lightgreen' : 'darkblue'
  }
}
