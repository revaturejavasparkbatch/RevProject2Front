import { Injectable } from '@angular/core';
import { Fortune } from '../Fortune';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { completeFortune } from '../completeFortune';

@Injectable({
  providedIn: 'root'
})
export class GetUserFortunesService {

  constructor(private http: HttpClient) { }

  userFortunesUrl: string = "http://34.207.123.39:8085/ProjectFortuneX/apifortunes?id=";

  getFortunes(id: number): Observable<completeFortune[]> {
    return this.http.get<completeFortune[]>(this.userFortunesUrl+id);
  }

  getUserFortunes(fortuneUrl: string): Observable<Fortune> {
    return this.http.get<Fortune>(fortuneUrl);
  }
}
