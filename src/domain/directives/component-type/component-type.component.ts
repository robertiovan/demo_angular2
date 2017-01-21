import { Component, OnInit, AfterViewInit, Input, Output, EventEmitter, ViewChild, Renderer, ElementRef, ViewContainerRef, ComponentFactoryResolver } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'my-component-type',
    templateUrl: 'component-type.component.html'
})
export default class ComponentTypeComponent implements OnInit, AfterViewInit {
    varFromOutisde:string;
    @Input()   
    set varIn (val: string) {
        this.varFromOutisde=val;
    }
    get varIn () {
        return this.varFromOutisde;
    }

    @Output() varOut = new EventEmitter<string>();

    @ViewChild('refInput') refInput:ElementRef ;
    @ViewChild('refDiv', {read:ViewContainerRef}) refDiv:ViewContainerRef ;  

    constructor(private renderer:Renderer, private resolver:ComponentFactoryResolver) { }

    ngOnInit() { }

    ngAfterViewInit() {

        //https://egghead.io/lessons/angular-2-set-values-on-generated-angular-2-templates-with-template-context?series=building-angular-2-components


        //const widgetFactory = this.resolver.resolveComponentFactory(aDirective)
        //const wigitRef = this.refDiv.createComponent(widgetFactory, 3);
        // wigitRef.instance.message = "asdasd"  // how to add a input variable


        //this.refDiv.move(wigitRef.hostView, 5);
        //this.refDiv.detach(2);

        //this.renderer.invokeElementMethod(this.refInput.nativeElement,"focus");
    }

    pushValueOutside(value:string){
        this.varOut.emit(value);
    }
}