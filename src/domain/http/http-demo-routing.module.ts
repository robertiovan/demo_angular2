import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { HttpDemoComponent } from "./http-demo.component"

@NgModule({
    imports: [RouterModule.forChild([{path:'',component:HttpDemoComponent}])],
    exports: [RouterModule]
})
export class HttpDemoRoutingModule { }