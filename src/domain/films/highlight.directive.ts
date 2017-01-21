import { Directive, ElementRef } from '@angular/core';

@Directive({
    selector: '[my-highlight]',
})
export default class HightlightDirective {
    constructor(el:ElementRef){
   
        el.nativeElement.style.background = "gold"
    }
}