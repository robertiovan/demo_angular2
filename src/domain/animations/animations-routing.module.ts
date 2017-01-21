import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import { AnimationsComponent } from './animations.component'
@NgModule({
    imports: [ RouterModule.forChild([{path:'',component:AnimationsComponent}]) ],
    exports:[RouterModule]
})
export class AnimationsRoutingModule {}