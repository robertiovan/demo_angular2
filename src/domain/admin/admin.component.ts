import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, Params } from '@angular/router';


@Component({
    moduleId: module.id,
    selector: 'my-admin',
    templateUrl: 'admin.component.html'
})
export default class AdminComponent implements OnInit {
    private dataFromRoute:string;
    constructor( private route: ActivatedRoute,private router: Router) { 

    }

    ngOnInit() {
        this.route.data.subscribe((data: { testData: string }) => {
            this.dataFromRoute = data.testData;
        });
    }
}