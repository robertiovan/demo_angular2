import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';


@Component({
    moduleId:module.id,
    selector: 'my-cities-detail',
    template: `<h2>
                    Details component with navigation back to parent with.
                </h2> 
                <h3>
                    Data from URL : {{dataFromUrl}}
                </h3>
                <a routerLink="../">Navigate up</a>
            `
})
export class CitiesDetailComponent implements OnInit {
    dataFromUrl:string;
    constructor(private activaterRoute: ActivatedRoute) { }
    
    ngOnInit() { 
        this.dataFromUrl = this.activaterRoute.snapshot.params['id'] as string;
    }
}