import { Injectable, Optional } from '@angular/core';

export class FilmServiceConfig {
  film = 'Avatar';
}

@Injectable()
export default class FilmsService {

    filmToWatchOnSunday:string="Don`t know :(, I'm not configured correctly";
    constructor(@Optional() config:FilmServiceConfig) { 
        if(config)
            this.filmToWatchOnSunday = config.film;
    }
}