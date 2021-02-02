import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders, HttpResponse } from '@angular/common/http';
import { Observable } from 'rxjs';

const url = 'http://localhost:8130/login';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  constructor(private http: HttpClient) { }

  public login(email, password): Observable<any> {
    const httpOptions = {
      observe: 'response' as 'response',
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    };

    const body = {
      email: btoa(email),
      password: btoa(password)
    }

    return this.http.post<any>(url, body, httpOptions);
  }

  public getLoggedUser(): Observable<any> {
    const url = 'http://localhost:8130/user';
    return this.http.get<any>(url);
  }

}
