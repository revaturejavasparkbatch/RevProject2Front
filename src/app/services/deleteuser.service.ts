import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { loggedInUser } from '../loggedInUser';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteuserService {

  constructor(private http: HttpClient, private route: Router) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  deleteUrl: string = "http://34.207.123.39:8085/ProjectFortuneX/delete";

  deleteUser(deleteUser: loggedInUser): Observable<loggedInUser> {
    return this.http.post<loggedInUser>(this.deleteUrl, deleteUser, this.httpOptions);
  }
}
