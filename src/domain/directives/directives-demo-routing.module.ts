import { NgModule } from '@angular/core';
import {RouterModule} from '@angular/router'

import DirectivesDemoComponent from './directives-demo.component';

@NgModule({
    imports: [RouterModule.forChild([{path:'',component:DirectivesDemoComponent}])],
    exports: [RouterModule]
})

export default class DirectivesDemoRoutingModule {}