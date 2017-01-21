import { Component, OnInit } from '@angular/core';
import { HttpDemoService, IDemoData } from './http-demo.service';
import * as Rx from "rxjs";

@Component({
    moduleId:module.id,
    selector: 'my-http-demo-component',
    templateUrl: './http-demo.component.html'
})
export class HttpDemoComponent implements OnInit {
    constructor(private httpDemoService:HttpDemoService) { }
    dataToShow:any;
    listHeros:Rx.Observable<any>;

    ngOnInit() { 
        Rx.Observable.interval(300).merge(Rx.Observable.interval(500));

        let obs:Rx.Observable<Array<IDemoData>> = Rx.Observable.fromPromise(this.httpDemoService.getDemoData()); 

        obs.subscribe((data:any)=> this.dataToShow = data )

        this.listHeros = this.httpDemoService.getHeroes();
    }
}