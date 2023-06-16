import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  elements = [{type:'Odd', num: 0}];

  createOE(element: number){
    this.elements.push({
      type: element % 2 == 0 ? 'Odd' : 'Even',
      num: element
    })
  }
}
