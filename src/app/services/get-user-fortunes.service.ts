import { Injectable } from '@angular/core';
import { Fortune } from '../Fortune';
import { Observable } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class GetUserFortunesService {

  constructor(private http: HttpClient) { }

  userFortunesUrl: string = "http://localhost:8080/ProjectFortuneX/apifortunes?id=";

  getFortunes(id: number): Observable<Fortune[]> {
    return this.http.get<Fortune[]>(this.userFortunesUrl+id);
  }

  getUserFortunes(fortuneUrl: string): Observable<Fortune> {
    return this.http.get<Fortune>(fortuneUrl);
  }
}
