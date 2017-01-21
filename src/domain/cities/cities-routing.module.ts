import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import  CitiesComponent  from './cities.component';
import { CitiesListComponent } from './cities-list.component';
import { CitiesDetailComponent } from './cities-detail.component';

import Outlet1Component from './outlet1.component';
import Outlet2Component from './outlet2.component';

@NgModule({
    imports: [RouterModule.forChild([
        { path: '', component: CitiesComponent, 
            children:[ {path:'',component:CitiesListComponent},
                       {path:':id',component:CitiesDetailComponent}, 
                    ]},
        { path: 'out', component: CitiesComponent, 
            children:[  
                        { path: '', component: CitiesListComponent },
                        { path: 'outPath1', component: Outlet1Component, outlet: 'out1Name' },
                        { path: 'outPath2', component: Outlet2Component, outlet: 'out2Name' }
                    ]}
    ])],
    exports: [RouterModule],
})
export default class CitiesRoutingModule { }
