import { Directive, ElementRef, HostListener, Input, OnInit, Renderer2, inject, } from '@angular/core';

@Directive({
  selector: '[hinvHover]'
})
export class HoverDirective implements OnInit {

  @Input() hinvHover: string = 'red';

  constructor(private element: ElementRef, private renderer: Renderer2) {
    console.log(this.element.nativeElement);

  }
  ngOnInit(): void {
    //this.element.nativeElement.style.backgroundcolor = this.color;
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundcolor',
      this.hinvHover
    );
  }
  @HostListener('mouseenter') onMouseEnter() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundcolor',
      'green');
  }
  @HostListener('mouseleave') onMouseLeave() {
    this.renderer.setStyle(
      this.element.nativeElement,
      'backgroundcolor',
      'white');

  }

}
