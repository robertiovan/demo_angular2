import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import GoogleMapsComponent from './google-maps.component';

@NgModule({
    imports: [RouterModule.forChild([{path:'',component:GoogleMapsComponent}])],
    exports: [],
})

export default class GoogleMapsRouterModule {}