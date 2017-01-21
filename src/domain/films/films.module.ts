import { NgModule, ModuleWithProviders} from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import HightlightDirective  from './highlight.directive'
import TitleComponent  from './title.component'
import FilmsService, { FilmServiceConfig } from './films.service'


import FilmsRoutingModule from './films-routing.module'

@NgModule({ 
    declarations: [TitleComponent, HightlightDirective],
    imports: [CommonModule, FormsModule, FilmsRoutingModule],
    providers:[FilmsService]
})
export default class FilmsModule {
    constructor(){

    }

    static forRoot(config: FilmServiceConfig): ModuleWithProviders {
        return {
                ngModule: FilmsModule,
                providers: [{provide: FilmServiceConfig, useValue: config }]
            };
    }
}