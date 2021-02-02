import { AuthDataStorage } from './../../security/auth-data-storage';
import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';

@Injectable()
export class LawyerGuard implements CanActivate {
    constructor( private authDataStorage: AuthDataStorage,
        private router: Router ){}

    canActivate(){
        if(this.authDataStorage.getUserRole() === "LAWYER"){
            return true;
        }
        else {
            return false;
        }
        // if(this.authDataStorage.getUserRole() === "CLIENT"){
        //     this.router.navigate(['homeClient']);
        //     return false;
        // }
        // if(this.authDataStorage.getUserRole() === "ADMIN"){
        //     this.router.navigate(['lawyers']);
        //     return false;
        // }
    }
}