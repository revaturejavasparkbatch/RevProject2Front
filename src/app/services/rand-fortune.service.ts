import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { Fortune } from '../Fortune';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import { UserCarryService } from 'src/app/services/user-carry.service';
import { loggedInUser } from 'src/app/loggedInUser';

@Injectable({
  providedIn: 'root'
})
export class RandFortuneService {

  getRandFortune(fortuneNums): Observable<Fortune[]> {
    let fortuneNum = this.getNumRand(fortuneNums);
    let randomFortuneUrl = "http://fortunecookieapi.herokuapp.com/v1/fortunes?limit=1&skip=" + fortuneNum;
    return this.http.get<Fortune[]>(randomFortuneUrl);
  }

  getNumRand(fortuneNums): Number{
    let numarr = [];
    let fortuneNumsToDecimal = [];
    for(let str in fortuneNums){
      fortuneNumsToDecimal.push((parseInt((str.substring(21)),16))-2868);
    }
    console.log(fortuneNums);
    for(let i=0; i<541; ++i){
      if(!fortuneNumsToDecimal.includes(i)){
      numarr.push(i);
      }
    }
    let num = numarr[Math.floor(Math.random()*numarr.length)];
    return num;
  }

  constructor(private http: HttpClient) { }
}
