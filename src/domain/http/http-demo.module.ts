import { NgModule } from '@angular/core';
import { HttpModule, JsonpModule } from '@angular/http'
import { CommonModule } from '@angular/common';
import * as Api from 'angular2-in-memory-web-api'

import { HttpDemoComponent } from './http-demo.component';
import { HttpDemoRoutingModule } from './http-demo-routing.module';
import { HttpDemoService } from './http-demo.service';
import { InMemHeroService } from './http-demo.service'

@NgModule({
    imports: [CommonModule, HttpModule, JsonpModule, HttpDemoRoutingModule, Api.InMemoryWebApiModule.forRoot(InMemHeroService,{ delay: 500 }),],
    declarations: [HttpDemoComponent],
    providers: [HttpDemoService]
})
export class HttpDemoModule { }
