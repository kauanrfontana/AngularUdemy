import { Component, Input, OnChanges, OnInit, SimpleChanges, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy, ViewChild, ElementRef, ContentChild } from '@angular/core';

@Component({
  selector: 'app-server-element',
  templateUrl: './server-element.component.html',
  styleUrls: ['./server-element.component.css'],
})
export class ServerElementComponent implements 
OnInit, 
OnChanges, 
DoCheck, 
AfterContentInit, 
AfterContentChecked, 
AfterViewInit, 
AfterViewChecked,
OnDestroy{
  @Input('srvElement') element: {type: string, name:string, content:string};
  @Input() name: string;
  @ViewChild('heading') header: ElementRef;
  @ContentChild('contentParagraph') paragraph: ElementRef

  constructor() {
    console.log("construtor chamado!")
  } 

  ngOnChanges(changes: SimpleChanges) {
    console.log("ngOnChanges chamado!")
    console.log(changes)
  }

  ngOnInit(){
    console.log("ngOnInit chamado!")
  }

  ngDoCheck(){
    console.log("ngDoCheck called!")
  }

  ngAfterContentInit(){
    console.log("ngAfterContentInit called!")
  }

  ngAfterContentChecked(){
    console.log("ngAfterContentChecked called!")
  }

  ngAfterViewInit(){
    console.log("ngAfterViewInit called!")
    console.log(this.header.nativeElement.textContent)
    console.log(this.paragraph.nativeElement.textContent)
  }

  ngAfterViewChecked(){
    console.log("ngAfterViewChecked called!")
  }

  ngOnDestroy(){
    console.log("ngOnDestroy called!")
  }

}
