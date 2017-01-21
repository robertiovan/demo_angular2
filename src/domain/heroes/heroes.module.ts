import { NgModule } from '@angular/core';

import HeroesRouterModule from './heroes-routing.module'
import HeroesComponent from './heroes.component';

@NgModule({
    imports: [HeroesRouterModule],
    exports: [],
    declarations: [HeroesComponent]
})
export class HeroesModule { }
