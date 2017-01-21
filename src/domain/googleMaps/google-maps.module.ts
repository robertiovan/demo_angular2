import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'

import GoogleMapsRouterModule from './google-maps-routing.module'
import  GoogleMapsComponent   from './google-maps.component';

@NgModule({ declarations: [GoogleMapsComponent],
    imports: [GoogleMapsRouterModule],
    exports: []
})
export class GoogleMapsModule {}