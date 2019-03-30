import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { userLogin } from '../userLogin';

@Injectable({
  providedIn: 'root'
})
export class LoginService {
  loginUrl: string = "http://localhost:8080/ProjectFortuneX/login";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  loginUser (userLogin: userLogin) {
    console.log("we are in loginUser");
    return this.http.post<userLogin>(this.loginUrl, userLogin, this.httpOptions);
    
  }
}
