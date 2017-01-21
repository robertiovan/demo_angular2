import { Component, OnInit,ViewChild, AfterViewInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Observable } from "rxjs/Observable";
import "rxjs/add/observable/combineLatest";
import "rxjs/add/operator/filter";

@Component({
    moduleId:module.id,
    selector: 'my-forms-demo',
    templateUrl: 'forms-demo.component.html'
})
export default class FormsDemoComponent implements OnInit,AfterViewInit {
    @ViewChild('formRef') form:FormControl;
    locations = ["Home", "Away", "Space", "Ocean", "Stars"];
    constructor() { }
    ngOnInit() { }

    username = "John";

    onSubmit(formValue:any){
        console.log(formValue);
    }

     ngAfterViewInit(){
       Observable.combineLatest(
           this.form.statusChanges,
           this.form.valueChanges,
           (status, value)=> ({status, value})
       )
           .filter(({status})=> status === 'VALID')
           .subscribe(({value})=> console.table(value))
    }

}