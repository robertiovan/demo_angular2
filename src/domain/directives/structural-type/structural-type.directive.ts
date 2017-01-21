import { Directive, ElementRef, ViewContainerRef, TemplateRef, AfterViewInit, Input } from '@angular/core';

@Directive({
    selector: '[mystructuraldirective]',
})
export default class StructuralDirective implements AfterViewInit {
    @Input() set mystructuraldirectiveFrom([one, two, three]:Array<string>){
        this.view.clear();
        this.view.createEmbeddedView(this.template, {$implicit:one});
        this.view.createEmbeddedView(this.template, {$implicit:two});
        this.view.createEmbeddedView(this.template, {$implicit:three});
    }

    constructor(private el:ElementRef, private view:ViewContainerRef, private template:TemplateRef<any>){
        console.log(el.nativeElement);
    }

    ngAfterViewInit() {
       // this.view.createEmbeddedView(this.template);
       // this.view.createEmbeddedView(this.template);
    }
}