import {Directive, ElementRef, HostBinding, HostListener, Input, OnInit, Renderer2} from '@angular/core';

@Directive({
  selector: '[appHeader]'
})

export class HeaderDirective implements OnInit {
  constructor(private element: ElementRef, private renderer: Renderer2) {}

  @Input('appHeader') hoverColor;
  @Input() defaultColor = 'transparent';
  @HostBinding ('style.backgroundColor') background: string;
  @HostBinding ('style.cursor') cursor: string;

  ngOnInit(): void {
    this.background = this.defaultColor;
  }

  @HostListener('mouseenter') mouseEnter(event: Event) { // возможен второй параметр для HostListener ('mouseenter', ['$event'])
    this.background = this.hoverColor;
    this.cursor = 'pointer';
  }

  @HostListener('mouseleave') mouseLeave(event: Event) {
    this.background = this.defaultColor;
  }

}
