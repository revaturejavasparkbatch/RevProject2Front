import { Injectable } from '@angular/core';

import { HttpClient, HttpHeaders } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class FavFortuneService {
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }
  postUrl: string = "http://localhost:8080/ProjectFortuneX/apifortunes";
  constructor(private http: HttpClient) { }

  addUser (fortune: Fortune) {
    console.log("we are in addUser");
    return this.http.post<Fortune>(this.postUrl, fortune, this.httpOptions);
  }
}
