import { Component, OnInit } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'my-directives-demo',
    templateUrl: 'directives-demo.component.html'
})
export default class DirectivesDemoComponent implements OnInit {
    private inserVarIn:string;
    private retrivedVar:string;
    private messagesForStructural:Array<string> = ['one1', 'two2', 'three3']
    constructor() { }

    ngOnInit() { 
        this.inserVarIn = 'value from outside';
    }
    getVarOut(theValue:string){
        this.retrivedVar = theValue;
    }
}