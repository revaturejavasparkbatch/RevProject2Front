import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { userLogin } from '../userLogin';
import { loggedInUser } from '../loggedInUser';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl: string = "http://34.207.123.39:8085/ProjectFortuneX/login";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  loginUser (userLogin: userLogin): Observable<loggedInUser> {
    console.log("we are in loginUser");
    return this.http.post<loggedInUser>(this.loginUrl, userLogin, this.httpOptions);
    
  }
}
