import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../User';

@Injectable({
  providedIn: 'root'
})
export class PostUserService {
  postUrl: string = "http://34.207.123.39:8085/ProjectFortuneX/apiusers";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  addUser (user: User) {
    console.log("we are in addUser");
    return this.http.post<User>(this.postUrl, user, this.httpOptions);
  }

}
