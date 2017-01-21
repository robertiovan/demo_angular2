import { NgModule } from '@angular/core';

import  CitiesComponent  from './cities.component'
import  CitiesRoutingModule  from './cities-routing.module'


import { CitiesListComponent } from './cities-list.component';
import { CitiesDetailComponent } from './cities-detail.component';

import Outlet1Component from './outlet1.component';
import Outlet2Component from './outlet2.component';

@NgModule({ declarations: [CitiesComponent,CitiesListComponent,CitiesDetailComponent,Outlet1Component,Outlet2Component],
    imports: [CitiesRoutingModule],
    exports: [],
})
export class CitiesModule {}