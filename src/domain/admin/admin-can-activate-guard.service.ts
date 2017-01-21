import { Injectable } from '@angular/core';
import { CanLoad, CanActivate, Router, ActivatedRouteSnapshot, RouterStateSnapshot, CanActivateChild,Route } from '@angular/router';

@Injectable()
export default class AdminCanActivateGuardService implements CanActivate, CanActivateChild, CanLoad {

    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean{
        console.log("activate guard");
        return true;
    }

    canLoad(route: Route): boolean {
        console.log("load guard");
        return true;
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        return this.canActivate(route, state);
    }
}