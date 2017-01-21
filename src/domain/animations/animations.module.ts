import { NgModule, } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AnimationsComponent }  from './animations.component';
import { AnimationsRoutingModule } from './animations-routing.module'

@NgModule({ declarations: [ AnimationsComponent ],
    imports: [ CommonModule, AnimationsRoutingModule ]
})
export class AnimationsModule {}