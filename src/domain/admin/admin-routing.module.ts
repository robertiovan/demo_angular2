import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router'
import AdminComponent from './admin.component'
import AdminSettingsComponent from './admin-settings.component'
import AdminCanActivateGuardService from './admin-can-activate-guard.service'
import AdminCanDeactivateGuardService from './admin-can-deactivate-guard.service'
import AdmiResolverService from './admin-resolver-guard.service'

@NgModule({ 
    imports: [RouterModule.forChild([
                    {path:'',
                        canActivate:[AdminCanActivateGuardService],
                        canDeactivate: [AdminCanDeactivateGuardService],
                        resolve: {
                            testData: AdmiResolverService
                        },
                        children:[{path:'',component:AdminComponent},
                                  {path:'new-setting',component:AdminSettingsComponent}]
                    }]
            )],
    exports: [RouterModule]
})
export default class AdminRoutingModule {}