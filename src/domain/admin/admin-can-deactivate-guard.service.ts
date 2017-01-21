import { Injectable } from '@angular/core';
import { CanDeactivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';

import AdminComponent from './admin.component';

@Injectable()
export default class AdminCanDeactivateGuardService implements CanDeactivate<AdminComponent> {

    canDeactivate(component: AdminComponent, route: ActivatedRouteSnapshot,state: RouterStateSnapshot): Promise<boolean> | boolean{
        console.log(state.url);
        console.log("dezactivate guard");
        return true;
    }
    constructor() { }
}