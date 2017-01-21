import { Component, OnInit, ViewContainerRef, AfterViewInit, ViewChild } from '@angular/core';

@Component({
    selector: 'my-template-component',
    template:`
        <template #refTemp>
            From template
        </template>
    `
})
export default class TemplateTypeComponent implements OnInit, AfterViewInit  {
    @ViewChild('refTemp') template:any;

    constructor(private view:ViewContainerRef ) { }

    ngOnInit() { }

    ngAfterViewInit(){
        this.view.createEmbeddedView(this.template);
    }
}