import { Observable } from 'rxjs';
import { Injectable } from '@angular/core';
import { HttpInterceptor, HttpRequest, HttpHandler, HttpEvent } from '@angular/common/http';

@Injectable()
export class TokenInterceptor implements HttpInterceptor {
    intercept(request: HttpRequest<any>, next: HttpHandler) : Observable<HttpEvent<any>>{
        let token = sessionStorage.getItem('token');
        if(token){
            request = request.clone({
                setHeaders: {
                    Authorization: token,
                }
            });
        }
        return next.handle(request);
    }
}