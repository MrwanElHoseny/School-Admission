import { Router } from '@angular/router';
import { admin } from './admin.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";

@Injectable()

export class adminAuth {
    constructor(private http: HttpClient,
        private admin: admin,
        private router: Router) {

    }

    isLogged(): boolean {
        if (localStorage.getItem('admin_Token') != null) {
            return true;
        } else {
            return false
        }
    }

    logIn(credits: { UserName: string, Password: string }) {
        this.http.post(this.admin.baseUrl + '/Admin/authenticate', credits, { observe: 'response', responseType: 'text' }).subscribe(
            res => {
                if (res.ok) {
                    localStorage.setItem('admin_Token', res.body);
                    this.admin.adminName = credits.UserName;
                    this.router.navigate(['admin', 'admissionManagement']);
                }
                else {
                    window.alert("Wrong username/Password");
                }
            }
        )
    }
    logOut() {
        localStorage.removeItem('admin_Token');
        this.router.navigate(['admin', 'signin'])
    }
}