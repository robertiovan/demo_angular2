import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import  TitleComponent from './title.component';

@NgModule({
    imports: [RouterModule.forChild([{path:'films',component:TitleComponent}])],
    exports: [RouterModule],
})
export default class FilmsRoutingModule { }
