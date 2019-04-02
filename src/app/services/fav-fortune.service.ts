import { Injectable } from '@angular/core';
import { completeFortune } from 'src/app/completeFortune'
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
  postUrl: string = "http://34.207.123.39:8085/ProjectFortuneX/apifortunes";
  constructor(private http: HttpClient) { }

   favAFortune(fortune: completeFortune) {
    console.log("we are in addUser");
    return this.http.post<completeFortune>(this.postUrl, fortune, this.httpOptions);
  }
}
