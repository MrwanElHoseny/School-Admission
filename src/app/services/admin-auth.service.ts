import { Injectable } from "@angular/core";

@Injectable()

export class adminAuth {

    loggedIn = false;
    authChecked = false;
    constructor() {

    }

    isLogged() {
        const promise = new Promise<boolean>(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(false)
                }, 800);
            }
        )

        return promise;
    }

    logIn() {
        const logging = new Promise<boolean>(
            (resolve, reject) => {
                setTimeout(() => {
                    resolve(true);
                }, 800);
            }
        )
        return logging;
    }
}