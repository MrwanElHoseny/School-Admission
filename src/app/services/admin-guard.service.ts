import { Injectable } from "@angular/core";
import { ActivatedRouteSnapshot, CanActivateChild, Router, RouterStateSnapshot } from "@angular/router";
import { adminAuth } from './admin-auth.service';

@Injectable()

export class adminGuard implements CanActivateChild {
    constructor(private adminAuth: adminAuth, private router: Router) {

    }

    canActivateChild(route: ActivatedRouteSnapshot, router: RouterStateSnapshot): Promise<boolean> | boolean {
        // return this.adminAuth.isLogged().then(
        //     (authenticated: boolean) => {
        //         this.adminAuth.loggedIn = authenticated;
        //         return this.adminAuth.loggedIn;
        //     }
        // );

        if (this.adminAuth.authChecked) {
            return this.adminAuth.loggedIn;
        }
        else {
            let auth: boolean;
            this.adminAuth.isLogged().then(
                (authenticated: boolean) => {
                    auth = authenticated;
                    this.adminAuth.authChecked = true;
                    this.adminAuth.loggedIn = authenticated;
                    return this.adminAuth.loggedIn;
                })
            if (auth) {
                return true;
            }
            else {
                this.router.navigate(['/admin/signin']);
                return false;
            }
        }

    }
}