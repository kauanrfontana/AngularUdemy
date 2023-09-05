import { Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appBetterHighlight]'
})
export class BetterHighlightDirective implements OnInit{
  @Input() defaultColor: string = 'transparent'
  @Input() highlightColor: string = 'blue'
  @HostBinding('style.backgroundColor') backgroundColor:string

  constructor(private elRef: ElementRef, private render: Renderer2) { }

  ngOnInit(): void {
    this.backgroundColor = this.defaultColor;
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue')
  }

  @HostListener('mouseenter') mouseover(eventData: Event){
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'blue', );
    this.backgroundColor = this.highlightColor;
  }

  @HostListener('mouseleave') mouseleave(eventData: Event){
    // this.render.setStyle(this.elRef.nativeElement, 'background-color', 'transparent', );
    this.backgroundColor = this.defaultColor;
  }


}
