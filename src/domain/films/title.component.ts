import { Component, OnInit, Input  } from '@angular/core';
import FilmsService from './films.service'


@Component({
    moduleId: module.id,
    selector: 'my-films',
    templateUrl: 'title.component.html'
})
export default class TitleComponent implements OnInit {
    @Input() subtitle = 'no subtitle available';
    film:string;

    constructor(private filmsService:FilmsService) {     
    }

    ngOnInit() { 
         this.film = this.filmsService.filmToWatchOnSunday;
    }
}