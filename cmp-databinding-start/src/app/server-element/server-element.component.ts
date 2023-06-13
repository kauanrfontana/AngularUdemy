import { ViewEncapsulation } from '@angular/compiler';
import { Component, Input, OnChanges, OnInit, SimpleChanges } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements OnInit, OnChanges {
  @Input('srvElement') element: {type: string, name:string, content:string};

  constructor() {
    console.log("construtor chamado!")
  } 

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges chamado!")
    console.log(changes)
  }

  ngOnInit(): void {
    console.log("ngOnInit chamado!")
  }

}
