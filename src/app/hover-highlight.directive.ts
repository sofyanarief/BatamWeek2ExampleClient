import { Directive, ElementRef, Renderer2, HostListener, HostBinding, Input } from '@angular/core';

@Directive({
  selector: '[appHoverHighlight]'
})
export class HoverHighlightDirective {
  @Input('appHoverHighlight') highLightColor: {background: string, text: string};

  @HostBinding('style.color') textColor: string;

  constructor(private elRef: ElementRef, private renderer: Renderer2) { }

  @HostListener('mouseenter') mouseOver(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", this.highLightColor.background);
    this.textColor = this.highLightColor.text;
  }

  @HostListener('mouseleave') mouseExit(eventData: Event) {
    this.renderer.setStyle(this.elRef.nativeElement, "background-color", "transparent");
    this.textColor = "black";
  }

}
