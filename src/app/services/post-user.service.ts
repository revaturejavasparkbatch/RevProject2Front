import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import {Observable} from 'rxjs';
import {User} from '../User';

@Injectable({
  providedIn: 'root'
})
export class PostUserService {
  postUrl: string = "http://localhost:8080/ProjectFortuneX/apiusers";

  constructor(private http: HttpClient) { }

  addUser (user: User): Observable<User> {
    return this.http.post<User>(this.postUrl, user);
  }

}
