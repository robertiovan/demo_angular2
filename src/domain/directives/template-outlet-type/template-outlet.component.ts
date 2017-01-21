import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'my-template-outlet-component',
    template:`
        <template #refTemplate let-txtMessage = "message">
            From template outlet : {{txtMessage}}
        </template>

        <div [ngTemplateOutlet]="refTemplate" [ngOutletContext]="{message:'ngOutletContext params'}"></div>
    `
})
export default class TemplateOutletComponent implements OnInit {
    constructor(

    ) { }

    ngOnInit() { }
}