import { Directive, ElementRef, HostListener, Input } from '@angular/core';

@Directive({
    selector: '[attributeTypeDirective]'
})
export default class AttributeTypeDirective {
    @Input() highlightColor: string;
    @Input('attributeTypeDirective') aliatAttr: string;

    element:ElementRef;
    constructor(el: ElementRef) {
         this.element = el;
    }

  @HostListener('mouseenter') onMouseEnter() {
    this.highlight(this.highlightColor);
  }

  @HostListener('mouseleave') onMouseLeave() {
    this.highlight(this.aliatAttr);
  }

  private highlight(color: string) {
    this.element.nativeElement.style.backgroundColor = color;
  }
}