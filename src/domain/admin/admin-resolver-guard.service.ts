import { Injectable } from '@angular/core';
import { Router, Resolve, RouterStateSnapshot,ActivatedRouteSnapshot } from '@angular/router';

@Injectable()
export default class AdminResolverGuardService implements Resolve<string>{

    constructor() { }

     resolve(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): Promise<string>|string {
        console.log("resolve guard");
        return "data from resolver";  
    }
}