import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs';
import { loggedInUser } from '../loggedInUser';

@Injectable({
  providedIn: 'root'
})
export class PostUserService {
  postUrl: string = "http://34.207.123.39:8085/ProjectFortuneX/apiusers";
  editUrl: string = "http://34.207.123.39:8085/ProjectFortuneX/update";

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  addUser (user: loggedInUser) {
    console.log("we are in addUser");
    return this.http.post<loggedInUser>(this.postUrl, user, this.httpOptions);
  }

  editUser (editThisUser : loggedInUser) {
    return this.http.post<loggedInUser>(this.editUrl, editThisUser, this.httpOptions);
  }
}
