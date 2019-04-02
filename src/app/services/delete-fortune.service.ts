import { Injectable } from '@angular/core';
import { HttpHeaders, HttpClient } from '@angular/common/http';
import { completeFortune } from '../completeFortune';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DeleteFortuneService {

  constructor(private http: HttpClient) { }

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type':  'application/json',
    })
  }

  deleteUrl: string = "http://34.207.123.39:8085/ProjectFortuneX/deletefortune";
  
  deleteFortune (deleteThis: completeFortune): Observable<completeFortune> {
    console.log("we are in delete Fortune");
    return this.http.post<completeFortune>(this.deleteUrl, deleteThis, this.httpOptions);
  }
}
