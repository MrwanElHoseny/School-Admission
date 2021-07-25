import { Router } from '@angular/router';
import { admin } from './admin.service';
import { HttpClient } from '@angular/common/http';
import { Injectable } from "@angular/core";
import { token } from '../interface/token';

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
        this.http.post<{ Token: string }>(this.admin.baseUrl + '/Admin/authenticate', credits, { observe: 'response' }).subscribe(
            res => {
                if (res.ok) {
                    localStorage.setItem('admin_Token', res.body.Token);
                    this.admin.adminName = credits.UserName;

                    //parsing token
                    let obj = {
                        Token: localStorage.getItem('admin_Token')
                    }
                    console.log(obj);

                    this.http.post<token[]>(
                        this.admin.baseUrl + '/Admin/DecodeJwt', obj, { observe: 'response' }).subscribe(
                            res => {
                                if (res.ok) {
                                    let exp = res.body[res.body.findIndex(
                                        token => {
                                            return token.Type == 'exp'
                                        }
                                    )].Value;
                                    console.log(exp)
                                    localStorage.setItem('admin_Exp', exp)

                                    this.router.navigate(['admin', 'admissionManagement']);
                                } else {
                                    console.log("Error decoding jwt")
                                }
                            }
                        )

                }
                else {
                    window.alert("Wrong username/Password");
                }
            }
        )
    }


    logOut() {
        localStorage.removeItem('admin_Token');
        localStorage.removeItem('admin_Exp');
        this.router.navigate(['admin', 'signin'])
    }
}