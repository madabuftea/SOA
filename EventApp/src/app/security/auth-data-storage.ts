import { forEach } from '@angular/router/src/utils/collection';
import { FormControl } from '@angular/forms';
import { Injectable } from '@angular/core';
import { User } from '../shared/data-types/User';

@Injectable()
export class AuthDataStorage {
    public isAuthenticated(): boolean{
        return this.getJwtToken() && (this.getLoggedUser() !== null);
    }
    
    public setJwtToken(token: string): void {
        sessionStorage.setItem('token', token);
    }

    public setLoggedUser(user: any): void {
        sessionStorage.setItem('loggedUser', JSON.stringify(user));
    }

    public getJwtToken(): string {
        return sessionStorage.getItem('token');
    }

    public getLoggedUser(): any {
        let user : any = JSON.parse(sessionStorage.getItem('loggedUser'));
        return user; 
    }

    public clearAuthData() {
        sessionStorage.clear();
    }
  
    public getUserRole(): string { 
        const jwttoken = this.getJwtToken();
        let jwtData = jwttoken.split('.')[1];
        let decodedJwtJsonData = window.atob(jwtData);
        let decodedJwtData = JSON.parse(decodedJwtJsonData);
        console.log(decodedJwtData);
        return decodedJwtData.role;
    }

}