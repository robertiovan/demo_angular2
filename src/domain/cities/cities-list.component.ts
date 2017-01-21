import { Component, OnInit } from '@angular/core';

@Component({
    moduleId:module.id,
    selector: 'my-cityes-list',
    template: `<h2>
                    <div>Test navigation by passing ":id" in URL</div>        
               </h2>
               <br>
               <a routerLink="/cities/X">Navigate to path with id X</a>`
})
export class CitiesListComponent implements OnInit {
    constructor() { }

    ngOnInit() { }
}