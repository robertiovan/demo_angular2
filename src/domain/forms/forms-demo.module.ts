import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms'
import { CommonModule } from '@angular/common'

import FormsDemoRoutingModule from './forms-demo-routing.module'
import FormsDemoComponent from './forms-demo.component';

@NgModule({
    imports: [CommonModule, FormsModule, FormsDemoRoutingModule],
    declarations: [FormsDemoComponent]

})
export class FormsDemoModule { }
