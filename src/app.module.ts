import { NgModule }      from '@angular/core';
import { BrowserModule,Title  } from '@angular/platform-browser';

import AppComponent  from './app.component';
import FilmsModule from "./domain/films/films.module"

/* Routing Module */
import AppRoutingModule from './app-routing.module';

/*Services */
import AppCanLoadGuardService from './app-can-load-guard.service'

@NgModule({
  imports:      [ BrowserModule, AppRoutingModule, FilmsModule.forRoot({film:'Avatar :)'}) ],
  declarations: [ AppComponent ],
  bootstrap:    [ AppComponent ],
  providers:    [AppCanLoadGuardService,Title]
})
export class AppModule { }