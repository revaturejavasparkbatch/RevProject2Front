import { Injectable } from '@angular/core';
import { loggedInUser } from '../loggedInUser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserCarryService {
  constructor(private http: HttpClient) { }
  
  currentUserUrl: string = "http://localhost:8080/ProjectFortuneX/session";

  getcurrentUser(): Observable<loggedInUser> {
    return this.http.get<loggedInUser>(this.currentUserUrl);
  }

}
