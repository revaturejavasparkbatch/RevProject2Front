import { Injectable } from '@angular/core';
import { loggedInUser } from '../loggedInUser';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

export class UserCarryService {
  constructor(private http: HttpClient) { }

  getcurrentUser(): loggedInUser {
    let user: loggedInUser = {
      id: JSON.parse(window.localStorage.getItem("id")),
      email: JSON.parse(window.localStorage.getItem("email")),
      fName: JSON.parse(window.localStorage.getItem("fName")),
      lName: JSON.parse(window.localStorage.getItem("lName")),
      password: JSON.parse(window.localStorage.getItem("password"))
    };
    
    return user;
  }

}
