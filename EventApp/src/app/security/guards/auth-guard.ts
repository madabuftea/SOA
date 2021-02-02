import { AuthDataStorage } from './../../security/auth-data-storage';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class AuthGuard implements CanActivate {
    constructor( private authDataStorage: AuthDataStorage,
        private router: Router ){}

    canActivate(){
        if(this.authDataStorage.isAuthenticated())
            return true;
        else{
            this.router.navigate(['login']);
            return false;
        }
    }
}