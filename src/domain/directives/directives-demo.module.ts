import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common'
import { FormsModule }   from '@angular/forms';

import DirectivesDemoRoutingModule from './directives-demo-routing.module'
import DirectivesDemoComponent from './directives-demo.component';
import AttributeTypeDirective from './attribute-type/attribute-type.directive';
import ComponentTypeComponent from './component-type/component-type.component';
import TemplateTypeComponent from './template-type/template-type.component';
import TemplateOutletComponent from './template-outlet-type/template-outlet.component';
import StructuralDirective from './structural-type/structural-type.directive';
import ExponentialPipe from './pipes/exponential-pipe';

@NgModule({
    imports: [DirectivesDemoRoutingModule, CommonModule,FormsModule],
    declarations: [DirectivesDemoComponent,
    AttributeTypeDirective,
    ComponentTypeComponent, 
    TemplateTypeComponent, 
    TemplateOutletComponent, 
    StructuralDirective,
    ExponentialPipe],
})
export class DirectivesDemoModule { }
