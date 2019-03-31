import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fortune } from '../Fortune';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class RandFortuneService {


  getRandFortune(): Observable<Fortune[]> {
    let fortuneNum = this.getNumRand();
    let randomFortuneUrl = "http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=1&skip=" + fortuneNum;
    return this.http.get<Fortune[]>(randomFortuneUrl);
  }

  getNumRand(): Number{
    let numarr = [];
    for(let i=0; i<547; ++i){
      numarr.push(i);
    }
    let num = numarr[Math.floor(Math.random()*numarr.length)];
    return num;
  }

  constructor(private http: HttpClient) { }
}
