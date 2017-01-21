import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import FormsDemoComponent from './forms-demo.component'

@NgModule({
    imports: [RouterModule.forChild([{path:'',component:FormsDemoComponent }])],
    exports: [RouterModule]
})
export default class FormsDemoRoutingModule { }
