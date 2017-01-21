import { Injectable } from '@angular/core';
import { CanLoad,Route } from '@angular/router';

@Injectable()
export default class AppCanLoadGuardService implements CanLoad {

    canLoad(route: Route): boolean {
        console.log("load guard");
        return true;
    }
}