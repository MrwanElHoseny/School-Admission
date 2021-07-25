import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivate, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { adminAuth } from './admin-auth.service';

@Injectable()

export class adminGuard implements CanActivateChild, CanActivate {

    constructor(private adminAuth: adminAuth, private router: Router) {
    }
    canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.adminAuth.isLogged()) {
            return true;
        } else {
            return false;
        }
    }

    canActivateChild(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
        if (this.canActivate(route, state)) {
            return true;
        } else {
            this.router.navigate(['admin', 'signin'])
            return false;
        }
    }
}