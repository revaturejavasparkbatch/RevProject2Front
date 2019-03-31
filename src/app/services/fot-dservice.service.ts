import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fortune } from '../Fortune';
import {HttpClient, HttpHeaders} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class FotDServiceService {
  
  private fortuneNum = this.getNumDay();
  private randomFortuneUrl = "http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=1&skip=" + this.fortuneNum;

  getFotd(): Observable<Fortune[]> {
    return this.http.get<Fortune[]>(this.randomFortuneUrl);
  }

  getNumDay(): Number{
   let day0 = new Date(2019,2,27);
   let currentDay = new Date();
    let timeSince = +currentDay - +day0;

   let numDays = Math.floor(timeSince/86400000);
  while (numDays > 546){
    numDays = numDays-546;
  }
  console.log(numDays);
  return numDays;
  }

  constructor(private http: HttpClient) { }
}
