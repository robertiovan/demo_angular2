import { Component, AfterViewInit } from '@angular/core';
import { Title }     from '@angular/platform-browser';


@Component({
  moduleId:module.id,
  selector: 'my-app',
  templateUrl:'app.component.html'
})
export default class AppComponent implements AfterViewInit  { 
    name = 'Angular2 demo '; 

    public constructor(private titleService: Title ) { 
    }

    ngAfterViewInit() {
      this.setTitle("Agular2 demo");
    }
    public setTitle( newTitle: string) {
      this.titleService.setTitle( newTitle );
    }
}