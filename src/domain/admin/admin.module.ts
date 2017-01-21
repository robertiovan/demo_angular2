import { NgModule } from '@angular/core';

import AdminComponent from './admin.component';
import AdminSettingsComponent from './admin-settings.component';
import AdminRoutingModule from './admin-routing.module';
import AdminCanActivateGuardService from './admin-can-activate-guard.service';
import AdminCanDeactivateGuardService from './admin-can-deactivate-guard.service';
import AdminResolverGuardService from './admin-resolver-guard.service';

@NgModule({
    imports: [AdminRoutingModule ],
    declarations: [AdminComponent, AdminSettingsComponent],
    providers:[AdminCanActivateGuardService, AdminCanDeactivateGuardService, AdminResolverGuardService]
})
export class AdminModule { }
